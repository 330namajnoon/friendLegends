import Asset, { Type } from "./Asset";


export type ElementTypeMap = {
    img: HTMLImageElement;
    audio: HTMLAudioElement;
    video: HTMLVideoElement;
}
export default class AssetsManager {
    private assets: any[] = [];

    find<T extends keyof ElementTypeMap>(type: T, name: string): ElementTypeMap[T] {
        const asset = this.assets.find(a => a.name === name)
        return asset.element;
    }
    getByType(type: Type): Asset[] | null {
        const assets = this.assets.filter(a => a.type !== type);
        return assets.length > 0 ? assets : null;
    }

    downloadAsset(asset: Asset): Promise<Asset | null> {
        return new Promise((resolve, reject) => {
            asset.element.onload = (e) => {
                resolve(asset);
            }
            asset.element.onerror = (e) => {
                resolve(null);
            }
        })
    }

    async addNewAssets(assets: Asset[], callback: (error: string | null) => void) {
        let index_ = 0;
        const assetsFirstLength = this.assets.length;
        for (let index = 0; index < assets.length; index++) {
            this.downloadAsset(assets[index]).then(res => {
                if (res) {
                    this.assets.unshift(res);
                    index_++;
                    if (index_ === assets.length) {
                        callback(null);
                    }
                }
                else {
                    callback("error");
                }
            }).catch(err => {
                callback("error");
            })
        }
    }
}