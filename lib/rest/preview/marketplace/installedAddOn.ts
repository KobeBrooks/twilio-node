/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Marketplace from "../Marketplace";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { InstalledAddOnExtensionListInstance } from "./installedAddOn/installedAddOnExtension";

/**
 * Options to pass to update a InstalledAddOnInstance
 */
export interface InstalledAddOnContextUpdateOptions {
  /** Valid JSON object that conform to the configuration schema exposed by the associated AvailableAddOn resource. This is only required by Add-ons that need to be configured */
  configuration?: any;
  /** An application-defined string that uniquely identifies the resource. This value must be unique within the Account. */
  uniqueName?: string;
}

/**
 * Options to pass to create a InstalledAddOnInstance
 */
export interface InstalledAddOnListInstanceCreateOptions {
  /** The SID of the AvaliableAddOn to install. */
  availableAddOnSid: string;
  /** Whether the Terms of Service were accepted. */
  acceptTermsOfService: boolean;
  /** The JSON object that represents the configuration of the new Add-on being installed. */
  configuration?: any;
  /** An application-defined string that uniquely identifies the resource. This value must be unique within the Account. */
  uniqueName?: string;
}
/**
 * Options to pass to each
 */
export interface InstalledAddOnListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: InstalledAddOnInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface InstalledAddOnListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface InstalledAddOnListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface InstalledAddOnContext {
  extensions: InstalledAddOnExtensionListInstance;

  /**
   * Remove a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance>;

  /**
   * Update a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnInstance
   */
  update(
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance>;
  /**
   * Update a InstalledAddOnInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnInstance
   */
  update(
    params: InstalledAddOnContextUpdateOptions,
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface InstalledAddOnContextSolution {
  sid: string;
}

export class InstalledAddOnContextImpl implements InstalledAddOnContext {
  protected _solution: InstalledAddOnContextSolution;
  protected _uri: string;

  protected _extensions?: InstalledAddOnExtensionListInstance;

  constructor(protected _version: Marketplace, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/InstalledAddOns/${sid}`;
  }

  get extensions(): InstalledAddOnExtensionListInstance {
    this._extensions =
      this._extensions ||
      InstalledAddOnExtensionListInstance(this._version, this._solution.sid);
    return this._extensions;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InstalledAddOnInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | InstalledAddOnContextUpdateOptions
      | ((error: Error | null, item?: InstalledAddOnInstance) => any),
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["configuration"] !== undefined)
      data["Configuration"] = serialize.object(params["configuration"]);
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InstalledAddOnInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
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

interface InstalledAddOnPayload extends TwilioResponsePayload {
  installed_add_ons: InstalledAddOnResource[];
}

interface InstalledAddOnResource {
  sid: string;
  account_sid: string;
  friendly_name: string;
  description: string;
  configuration: any;
  unique_name: string;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: object;
}

export class InstalledAddOnInstance {
  protected _solution: InstalledAddOnContextSolution;
  protected _context?: InstalledAddOnContext;

  constructor(
    protected _version: Marketplace,
    payload: InstalledAddOnResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.description = payload.description;
    this.configuration = payload.configuration;
    this.uniqueName = payload.unique_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * A short description of the Add-on\'s functionality
   */
  description: string;
  /**
   * The JSON object that represents the current configuration of installed Add-on
   */
  configuration: any;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName: string;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the resource
   */
  url: string;
  /**
   * The URLs of related resources
   */
  links: object;

  private get _proxy(): InstalledAddOnContext {
    this._context =
      this._context ||
      new InstalledAddOnContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnInstance
   */
  fetch(
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a InstalledAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnInstance
   */
  update(
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance>;
  /**
   * Update a InstalledAddOnInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnInstance
   */
  update(
    params: InstalledAddOnContextUpdateOptions,
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the extensions.
   */
  extensions(): InstalledAddOnExtensionListInstance {
    return this._proxy.extensions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      description: this.description,
      configuration: this.configuration,
      uniqueName: this.uniqueName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface InstalledAddOnSolution {}

export interface InstalledAddOnListInstance {
  _version: Marketplace;
  _solution: InstalledAddOnSolution;
  _uri: string;

  (sid: string): InstalledAddOnContext;
  get(sid: string): InstalledAddOnContext;

  /**
   * Create a InstalledAddOnInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnInstance
   */
  create(
    params: InstalledAddOnListInstanceCreateOptions,
    callback?: (error: Error | null, item?: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance>;

  /**
   * Streams InstalledAddOnInstance records from the API.
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
   * @param { InstalledAddOnListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: InstalledAddOnInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: InstalledAddOnListInstanceEachOptions,
    callback?: (
      item: InstalledAddOnInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of InstalledAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: InstalledAddOnPage) => any
  ): Promise<InstalledAddOnPage>;
  /**
   * Lists InstalledAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InstalledAddOnListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: InstalledAddOnInstance[]) => any
  ): Promise<InstalledAddOnInstance[]>;
  list(
    params: InstalledAddOnListInstanceOptions,
    callback?: (error: Error | null, items: InstalledAddOnInstance[]) => any
  ): Promise<InstalledAddOnInstance[]>;
  /**
   * Retrieve a single page of InstalledAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { InstalledAddOnListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: InstalledAddOnPage) => any
  ): Promise<InstalledAddOnPage>;
  page(
    params: InstalledAddOnListInstancePageOptions,
    callback?: (error: Error | null, items: InstalledAddOnPage) => any
  ): Promise<InstalledAddOnPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InstalledAddOnListInstance(
  version: Marketplace
): InstalledAddOnListInstance {
  const instance = ((sid) => instance.get(sid)) as InstalledAddOnListInstance;

  instance.get = function get(sid): InstalledAddOnContext {
    return new InstalledAddOnContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/InstalledAddOns`;

  instance.create = function create(
    params: InstalledAddOnListInstanceCreateOptions,
    callback?: (error: Error | null, items: InstalledAddOnInstance) => any
  ): Promise<InstalledAddOnInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["availableAddOnSid"] === null ||
      params["availableAddOnSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['availableAddOnSid']\" missing."
      );
    }

    if (
      params["acceptTermsOfService"] === null ||
      params["acceptTermsOfService"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['acceptTermsOfService']\" missing."
      );
    }

    let data: any = {};

    data["AvailableAddOnSid"] = params["availableAddOnSid"];

    data["AcceptTermsOfService"] = serialize.bool(
      params["acceptTermsOfService"]
    );
    if (params["configuration"] !== undefined)
      data["Configuration"] = serialize.object(params["configuration"]);
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new InstalledAddOnInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | InstalledAddOnListInstancePageOptions
      | ((error: Error | null, items: InstalledAddOnPage) => any),
    callback?: (error: Error | null, items: InstalledAddOnPage) => any
  ): Promise<InstalledAddOnPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InstalledAddOnPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: InstalledAddOnPage) => any
  ): Promise<InstalledAddOnPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new InstalledAddOnPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class InstalledAddOnPage extends Page<
  Marketplace,
  InstalledAddOnPayload,
  InstalledAddOnResource,
  InstalledAddOnInstance
> {
  /**
   * Initialize the InstalledAddOnPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Marketplace,
    response: Response<string>,
    solution: InstalledAddOnSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of InstalledAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InstalledAddOnResource): InstalledAddOnInstance {
    return new InstalledAddOnInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
