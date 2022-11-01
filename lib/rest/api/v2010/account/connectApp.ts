/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



type ConnectAppPermission = 'get-all'|'post-all';


/**
 * Options to pass to update a ConnectAppInstance
 *
 * @property { string } [authorizeRedirectUrl] The URL to redirect the user to after we authenticate the user and obtain authorization to access the Connect App.
 * @property { string } [companyName] The company name to set for the Connect App.
 * @property { string } [deauthorizeCallbackMethod] The HTTP method to use when calling &#x60;deauthorize_callback_url&#x60;.
 * @property { string } [deauthorizeCallbackUrl] The URL to call using the &#x60;deauthorize_callback_method&#x60; to de-authorize the Connect App.
 * @property { string } [description] A description of the Connect App.
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [homepageUrl] A public URL where users can obtain more information about this Connect App.
 * @property { Array<ConnectAppPermission> } [permissions] A comma-separated list of the permissions you will request from the users of this ConnectApp.  Can include: &#x60;get-all&#x60; and &#x60;post-all&#x60;.
 */
export interface ConnectAppContextUpdateOptions {
  "authorizeRedirectUrl"?: string;
  "companyName"?: string;
  "deauthorizeCallbackMethod"?: string;
  "deauthorizeCallbackUrl"?: string;
  "description"?: string;
  "friendlyName"?: string;
  "homepageUrl"?: string;
  "permissions"?: Array<ConnectAppPermission>;
}
/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ConnectAppListInstanceEachOptions {
  "pageSize"?: number;
  callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface ConnectAppListInstanceOptions {
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface ConnectAppListInstancePageOptions {
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface ConnectAppContext {


  /**
   * Remove a ConnectAppInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a ConnectAppInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectAppInstance
   */
  fetch(callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>


  /**
   * Update a ConnectAppInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectAppInstance
   */
  update(callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
  /**
   * Update a ConnectAppInstance
   *
   * @param { ConnectAppContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectAppInstance
   */
  update(params: ConnectAppContextUpdateOptions, callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
  update(params?: any, callback?: any): Promise<ConnectAppInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConnectAppContextSolution {
  "accountSid"?: string;
  "sid"?: string;
}

export class ConnectAppContextImpl implements ConnectAppContext {
  protected _solution: ConnectAppContextSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, sid: string) {
    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/ConnectApps/${sid}.json`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<ConnectAppInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new ConnectAppInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<ConnectAppInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["authorizeRedirectUrl"] !== undefined) data["AuthorizeRedirectUrl"] = params["authorizeRedirectUrl"];
    if (params["companyName"] !== undefined) data["CompanyName"] = params["companyName"];
    if (params["deauthorizeCallbackMethod"] !== undefined) data["DeauthorizeCallbackMethod"] = params["deauthorizeCallbackMethod"];
    if (params["deauthorizeCallbackUrl"] !== undefined) data["DeauthorizeCallbackUrl"] = params["deauthorizeCallbackUrl"];
    if (params["description"] !== undefined) data["Description"] = params["description"];
    if (params["friendlyName"] !== undefined) data["FriendlyName"] = params["friendlyName"];
    if (params["homepageUrl"] !== undefined) data["HomepageUrl"] = params["homepageUrl"];
    if (params["permissions"] !== undefined) data["Permissions"] = serialize.map(params["permissions"], ((e) => e));

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ConnectAppInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export type ConnectAppDeauthorizeCallbackMethod = 'HEAD'|'GET'|'POST'|'PATCH'|'PUT'|'DELETE';

interface ConnectAppPayload extends ConnectAppResource, Page.TwilioResponsePayload {
}

interface ConnectAppResource {
  account_sid?: string | null;
  authorize_redirect_url?: string | null;
  company_name?: string | null;
  deauthorize_callback_method?: ConnectAppDeauthorizeCallbackMethod;
  deauthorize_callback_url?: string | null;
  description?: string | null;
  friendly_name?: string | null;
  homepage_url?: string | null;
  permissions?: Array<ConnectAppPermission> | null;
  sid?: string | null;
  uri?: string | null;
}

export class ConnectAppInstance {
  protected _solution: ConnectAppContextSolution;
  protected _context?: ConnectAppContext;

  constructor(protected _version: V2010, payload: ConnectAppPayload, accountSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.authorizeRedirectUrl = payload.authorize_redirect_url;
    this.companyName = payload.company_name;
    this.deauthorizeCallbackMethod = payload.deauthorize_callback_method;
    this.deauthorizeCallbackUrl = payload.deauthorize_callback_url;
    this.description = payload.description;
    this.friendlyName = payload.friendly_name;
    this.homepageUrl = payload.homepage_url;
    this.permissions = payload.permissions;
    this.sid = payload.sid;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The URL to redirect the user to after authorization
   */
  authorizeRedirectUrl?: string | null;
  /**
   * The company name set for the Connect App
   */
  companyName?: string | null;
  /**
   * The HTTP method we use to call deauthorize_callback_url
   */
  deauthorizeCallbackMethod?: ConnectAppDeauthorizeCallbackMethod;
  /**
   * The URL we call to de-authorize the Connect App
   */
  deauthorizeCallbackUrl?: string | null;
  /**
   * The description of the Connect App
   */
  description?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The URL users can obtain more information
   */
  homepageUrl?: string | null;
  /**
   * The set of permissions that your ConnectApp requests
   */
  permissions?: Array<ConnectAppPermission> | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): ConnectAppContext {
    this._context = this._context || new ConnectAppContextImpl(this._version, this._solution.accountSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ConnectAppInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ConnectAppInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectAppInstance
   */
  fetch(callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConnectAppInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectAppInstance
   */
  update(callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
  /**
   * Update a ConnectAppInstance
   *
   * @param { ConnectAppContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ConnectAppInstance
   */
  update(params: ConnectAppContextUpdateOptions, callback?: (error: Error | null, item?: ConnectAppInstance) => any): Promise<ConnectAppInstance>;
  update(params?: any, callback?: any): Promise<ConnectAppInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      authorizeRedirectUrl: this.authorizeRedirectUrl, 
      companyName: this.companyName, 
      deauthorizeCallbackMethod: this.deauthorizeCallbackMethod, 
      deauthorizeCallbackUrl: this.deauthorizeCallbackUrl, 
      description: this.description, 
      friendlyName: this.friendlyName, 
      homepageUrl: this.homepageUrl, 
      permissions: this.permissions, 
      sid: this.sid, 
      uri: this.uri
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface ConnectAppListInstance {
  (sid: string): ConnectAppContext;
  get(sid: string): ConnectAppContext;



  /**
   * Streams ConnectAppInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ConnectAppInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectAppListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: ConnectAppListInstanceEachOptions, callback?: (item: ConnectAppInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
  /**
   * Retrieve a single target page of ConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
  getPage(params?: any, callback?: any): Promise<ConnectAppPage>;
  /**
   * Lists ConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ConnectAppInstance[]) => any): Promise<ConnectAppInstance[]>;
  /**
   * Lists ConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectAppListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: ConnectAppListInstanceOptions, callback?: (error: Error | null, items: ConnectAppInstance[]) => any): Promise<ConnectAppInstance[]>;
  list(params?: any, callback?: any): Promise<ConnectAppInstance[]>;
  /**
   * Retrieve a single page of ConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
  /**
   * Retrieve a single page of ConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConnectAppListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: ConnectAppListInstancePageOptions, callback?: (error: Error | null, items: ConnectAppPage) => any): Promise<ConnectAppPage>;
  page(params?: any, callback?: any): Promise<ConnectAppPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConnectAppSolution {
  accountSid?: string;
}

interface ConnectAppListInstanceImpl extends ConnectAppListInstance {}
class ConnectAppListInstanceImpl implements ConnectAppListInstance {
  _version?: V2010;
  _solution?: ConnectAppSolution;
  _uri?: string;

}

export function ConnectAppListInstance(version: V2010, accountSid: string): ConnectAppListInstance {
  const instance = ((sid) => instance.get(sid)) as ConnectAppListInstanceImpl;

  instance.get = function get(sid): ConnectAppContext {
    return new ConnectAppContextImpl(version, accountSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/ConnectApps.json`;

  instance.page = function page(params?: any, callback?: any): Promise<ConnectAppPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ConnectAppPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<ConnectAppPage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new ConnectAppPage(this._version, payload, this._solution));
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


export class ConnectAppPage extends Page<V2010, ConnectAppPayload, ConnectAppResource, ConnectAppInstance> {
/**
* Initialize the ConnectAppPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: ConnectAppSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ConnectAppInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ConnectAppPayload): ConnectAppInstance {
    return new ConnectAppInstance(
    this._version,
    payload,
        this._solution.accountSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

