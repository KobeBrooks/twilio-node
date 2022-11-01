/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



/**
 * Options to pass to fetch a WorkspaceStatisticsInstance
 *
 * @property { number } [minutes] Only calculate statistics since this many minutes in the past. The default 15 minutes. This is helpful for displaying statistics for the last 15 minutes, 240 minutes (4 hours), and 480 minutes (8 hours) to see trends.
 * @property { Date } [startDate] Only calculate statistics from this date and time and later, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
 * @property { Date } [endDate] Only calculate statistics from this date and time and earlier, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
 * @property { string } [taskChannel] Only calculate statistics on this TaskChannel. Can be the TaskChannel\&#39;s SID or its &#x60;unique_name&#x60;, such as &#x60;voice&#x60;, &#x60;sms&#x60;, or &#x60;default&#x60;.
 * @property { string } [splitByWaitTime] A comma separated list of values that describes the thresholds, in seconds, to calculate statistics on. For each threshold specified, the number of Tasks canceled and reservations accepted above and below the specified thresholds in seconds are computed. For example, &#x60;5,30&#x60; would show splits of Tasks that were canceled or accepted before and after 5 seconds and before and after 30 seconds. This can be used to show short abandoned Tasks or Tasks that failed to meet an SLA.
 */
export interface WorkspaceStatisticsListInstanceFetchOptions {
  "minutes"?: number;
  "startDate"?: Date;
  "endDate"?: Date;
  "taskChannel"?: string;
  "splitByWaitTime"?: string;
}

export interface WorkspaceStatisticsListInstance {


  /**
   * Fetch a WorkspaceStatisticsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
  /**
   * Fetch a WorkspaceStatisticsInstance
   *
   * @param { WorkspaceStatisticsListInstanceFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceStatisticsInstance
   */
  fetch(params: WorkspaceStatisticsListInstanceFetchOptions, callback?: (error: Error | null, item?: WorkspaceStatisticsInstance) => any): Promise<WorkspaceStatisticsInstance>;
  fetch(params?: any, callback?: any): Promise<WorkspaceStatisticsInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceStatisticsSolution {
  workspaceSid?: string;
}

interface WorkspaceStatisticsListInstanceImpl extends WorkspaceStatisticsListInstance {}
class WorkspaceStatisticsListInstanceImpl implements WorkspaceStatisticsListInstance {
  _version?: V1;
  _solution?: WorkspaceStatisticsSolution;
  _uri?: string;

}

export function WorkspaceStatisticsListInstance(version: V1, workspaceSid: string): WorkspaceStatisticsListInstance {
  const instance = {} as WorkspaceStatisticsListInstanceImpl;

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Statistics`;

  instance.fetch = function fetch(params?: any, callback?: any): Promise<WorkspaceStatisticsInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["minutes"] !== undefined) data["Minutes"] = params["minutes"];
    if (params["startDate"] !== undefined) data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
    if (params["endDate"] !== undefined) data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
    if (params["taskChannel"] !== undefined) data["TaskChannel"] = params["taskChannel"];
    if (params["splitByWaitTime"] !== undefined) data["SplitByWaitTime"] = params["splitByWaitTime"];

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkspaceStatisticsInstance(operationVersion, payload, this._solution.workspaceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface WorkspaceStatisticsPayload extends WorkspaceStatisticsResource{
}

interface WorkspaceStatisticsResource {
  realtime?: any | null;
  cumulative?: any | null;
  account_sid?: string | null;
  workspace_sid?: string | null;
  url?: string | null;
}

export class WorkspaceStatisticsInstance {

  constructor(protected _version: V1, payload: WorkspaceStatisticsPayload, workspaceSid?: string) {
    this.realtime = payload.realtime;
    this.cumulative = payload.cumulative;
    this.accountSid = payload.account_sid;
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;

  }

  /**
   * n object that contains the real-time statistics for the Workspace
   */
  realtime?: any | null;
  /**
   * An object that contains the cumulative statistics for the Workspace
   */
  cumulative?: any | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Workspace
   */
  workspaceSid?: string | null;
  /**
   * The absolute URL of the Workspace statistics resource
   */
  url?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      realtime: this.realtime, 
      cumulative: this.cumulative, 
      accountSid: this.accountSid, 
      workspaceSid: this.workspaceSid, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


