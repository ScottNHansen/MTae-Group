export enum InstrumentAnalyticType {
    InvestmentGrowth = 13005
}

export class InstrumentAnalytic {
    public InstrumentID: Number;
    public InstrumentAnalyticTypeID: InstrumentAnalyticType;
    public TradeDate: Date;
    public Value: number;
}
