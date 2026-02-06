
export type ArticleChangingProps = {
    name: string;
    price: string;
    power: number;
    description: string;
    detailData: Record<string, string>;
    producent:string,
    image:File[] | string[],
    heatEfficiency:number,
    about:string,
    guarantee:string,
    return:string,
}