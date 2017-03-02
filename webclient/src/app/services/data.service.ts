import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import { RedemptionActivityView } from '../business/redemptionActivityView';
import { SubscriptionActivityView } from '../business/subscription-activity-View';
import { ActivitySummaryByMonth } from '../business/activitySummaryByMonth';
import { InstrumentAnalytic, InstrumentAnalyticType } from '../business/instrumentAnalytic';

@Injectable()
export class DataService {

    //private _url = 'http://192.168.10.180:50558/api'
    private _url = 'http://localhost:50558/api'

    constructor(private http: Http) {

    }
    getSubscriptionActivities(): Observable<SubscriptionActivityView[]> {
        console.log("DataService.getsubscriptionActivity");
        return this.http.get(this._url + '/activity/' + 'subscriptionactivity')
            .map((response: Response) => <SubscriptionActivityView[]>response.json()
                .map((r: any) => {
                    let activity = new SubscriptionActivityView();
                    activity.EffectiveDate = new Date(r.EffectiveDate);
                    activity.ParentInvestorName = r.ParentInvestorName;
                    activity.InvestorName = r.InvestorName;
                    activity.Activity = r.Activity;
                    activity.Amount = r.Amount;
                    activity.FundShortName = r.FundShortName;
                    activity.WireDirect = r.WireDirect;
                    activity.AccountNumber = r.AccountNumber;
                    activity.Notes = r.Notes;
                    activity.SentToClient = r.SentToClient;
                    activity.ReceivedFromClient = r.ReceivedFromClient;
                    activity.WireRequested = r.WireRequested;
                    activity.FundsWired = r.FundsWired;
                    activity.WireReceived = r.WireReceived;
                    activity.Sub = r.Sub;
                    activity.Sub2x = r.Sub2x;
                    activity.StateOfResidence = r.StateOfResidence;
                    activity.ManagementFee = r.ManagementFee;
                    activity.PlanAssets = r.PlanAssets;
                    activity.VCMClients = r.VCMClients;
                    activity.BD = r.BD;

                    return activity;

                }))
            .catch(this.handleError)

    }

    getRedemptionActivities(): Observable<RedemptionActivityView[]> {
        console.log("DataService.getRedemptionActivity");
        return this.http.get(this._url + '/activity/' + 'redemptionactivity')
            .map((response: Response) => <RedemptionActivityView[]>response.json()
                .map((r: any) => {
                    let activity = new RedemptionActivityView();
                    activity.EffectiveDate = new Date(r.EffectiveDate);
                    activity.DueDate = new Date(r.DueDate);
                    activity.InvestorName = r.InvestorName;
                    activity.Activity = r.Activity;
                    activity.Amount = r.Amount;
                    activity.FundShortName = r.FundShortName;
                    return activity;

                }))
            .catch(this.handleError)
    }

    getActivtySummaryByMonth(): Observable<ActivitySummaryByMonth[]> {
        return this.http.get(this._url + '/activity/' + 'ActivitySummaryByMonth')
            .map((response: Response) => <ActivitySummaryByMonth[]>response.json()
                .map((r: any) => {
                    let activitySummary = new ActivitySummaryByMonth();
                    activitySummary.Period = new Date(r.Period);
                    activitySummary.Subscriptions = r.Subscriptions;
                    activitySummary.Redemptions = r.Redemptions;
                    return activitySummary;

                }))
            .catch(this.handleError)
    }

    getInstrumentAnalytics(symbol:string,instrumentAnalyticType:InstrumentAnalyticType): Observable<InstrumentAnalytic[]> {
        return this.http.get(this._url + '/fundperformance/' + instrumentAnalyticType + '/' + symbol)
            .map((response: Response) => <InstrumentAnalytic[]>response.json()
                .map((r: any) => {
                    let instrumentAnalytic = new InstrumentAnalytic();
                    instrumentAnalytic.InstrumentID = r.InstrumentID;
                    instrumentAnalytic.InstrumentAnalyticTypeID = r.AnalyticTypeID;
                    instrumentAnalytic.TradeDate = new Date(r.TradeDate);
                    instrumentAnalytic.Value = r.Value;
                    return instrumentAnalytic;

                }))
            .catch(this.handleError)
    }

    private handleError(err: any, caught: Observable<any[]>): Observable<any[]> {
        console.log("DataService handleError");
        return null;
    }
}