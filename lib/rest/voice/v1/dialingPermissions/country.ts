/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Voice
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { HighriskSpecialPrefixListInstance } from "./country/highriskSpecialPrefix";

/**
 * Options to pass to each
 */
export interface CountryListInstanceEachOptions {
  /** Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
  isoCode?: string;
  /** Filter to retrieve the country permissions by specifying the continent */
  continent?: string;
  /** Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html) */
  countryCode?: string;
  /** Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`. */
  lowRiskNumbersEnabled?: boolean;
  /** Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false` */
  highRiskSpecialNumbersEnabled?: boolean;
  /** Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`. */
  highRiskTollfraudNumbersEnabled?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: CountryInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CountryListInstanceOptions {
  /** Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
  isoCode?: string;
  /** Filter to retrieve the country permissions by specifying the continent */
  continent?: string;
  /** Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html) */
  countryCode?: string;
  /** Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`. */
  lowRiskNumbersEnabled?: boolean;
  /** Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false` */
  highRiskSpecialNumbersEnabled?: boolean;
  /** Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`. */
  highRiskTollfraudNumbersEnabled?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CountryListInstancePageOptions {
  /** Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
  isoCode?: string;
  /** Filter to retrieve the country permissions by specifying the continent */
  continent?: string;
  /** Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html) */
  countryCode?: string;
  /** Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`. */
  lowRiskNumbersEnabled?: boolean;
  /** Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false` */
  highRiskSpecialNumbersEnabled?: boolean;
  /** Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`. */
  highRiskTollfraudNumbersEnabled?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CountryContext {
  highriskSpecialPrefixes: HighriskSpecialPrefixListInstance;

  /**
   * Fetch a CountryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CountryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CountryInstance) => any
  ): Promise<CountryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CountryContextSolution {
  isoCode: string;
}

export class CountryContextImpl implements CountryContext {
  protected _solution: CountryContextSolution;
  protected _uri: string;

  protected _highriskSpecialPrefixes?: HighriskSpecialPrefixListInstance;

  constructor(protected _version: V1, isoCode: string) {
    if (!isValidPathParam(isoCode)) {
      throw new Error("Parameter 'isoCode' is not valid.");
    }

    this._solution = { isoCode };
    this._uri = `/DialingPermissions/Countries/${isoCode}`;
  }

  get highriskSpecialPrefixes(): HighriskSpecialPrefixListInstance {
    this._highriskSpecialPrefixes =
      this._highriskSpecialPrefixes ||
      HighriskSpecialPrefixListInstance(this._version, this._solution.isoCode);
    return this._highriskSpecialPrefixes;
  }

  fetch(
    callback?: (error: Error | null, item?: CountryInstance) => any
  ): Promise<CountryInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CountryInstance(
          operationVersion,
          payload,
          instance._solution.isoCode
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

interface CountryPayload extends TwilioResponsePayload {
  content: CountryResource[];
}

interface CountryResource {
  iso_code: string;
  name: string;
  continent: string;
  country_codes: Array<string>;
  low_risk_numbers_enabled: boolean;
  high_risk_special_numbers_enabled: boolean;
  high_risk_tollfraud_numbers_enabled: boolean;
  url: string;
  links: object;
}

export class CountryInstance {
  protected _solution: CountryContextSolution;
  protected _context?: CountryContext;

  constructor(
    protected _version: V1,
    payload: CountryResource,
    isoCode?: string
  ) {
    this.isoCode = payload.iso_code;
    this.name = payload.name;
    this.continent = payload.continent;
    this.countryCodes = payload.country_codes;
    this.lowRiskNumbersEnabled = payload.low_risk_numbers_enabled;
    this.highRiskSpecialNumbersEnabled =
      payload.high_risk_special_numbers_enabled;
    this.highRiskTollfraudNumbersEnabled =
      payload.high_risk_tollfraud_numbers_enabled;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { isoCode: isoCode || this.isoCode };
  }

  /**
   * The ISO country code
   */
  isoCode: string;
  /**
   * The name of the country
   */
  name: string;
  /**
   * The name of the continent in which the country is located
   */
  continent: string;
  /**
   * The E.164 assigned country codes(s)
   */
  countryCodes: Array<string>;
  /**
   * Whether dialing to low-risk numbers is enabled
   */
  lowRiskNumbersEnabled: boolean;
  /**
   * Whether dialing to high-risk special services numbers is enabled
   */
  highRiskSpecialNumbersEnabled: boolean;
  /**
   * Whether dialing to high-risk toll fraud numbers is enabled, else `false`
   */
  highRiskTollfraudNumbersEnabled: boolean;
  /**
   * The absolute URL of this resource
   */
  url: string;
  /**
   * A list of URLs related to this resource
   */
  links: object;

  private get _proxy(): CountryContext {
    this._context =
      this._context ||
      new CountryContextImpl(this._version, this._solution.isoCode);
    return this._context;
  }

  /**
   * Fetch a CountryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CountryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CountryInstance) => any
  ): Promise<CountryInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the highriskSpecialPrefixes.
   */
  highriskSpecialPrefixes(): HighriskSpecialPrefixListInstance {
    return this._proxy.highriskSpecialPrefixes;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      isoCode: this.isoCode,
      name: this.name,
      continent: this.continent,
      countryCodes: this.countryCodes,
      lowRiskNumbersEnabled: this.lowRiskNumbersEnabled,
      highRiskSpecialNumbersEnabled: this.highRiskSpecialNumbersEnabled,
      highRiskTollfraudNumbersEnabled: this.highRiskTollfraudNumbersEnabled,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CountrySolution {}

export interface CountryListInstance {
  _version: V1;
  _solution: CountrySolution;
  _uri: string;

  (isoCode: string): CountryContext;
  get(isoCode: string): CountryContext;

  /**
   * Streams CountryInstance records from the API.
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
   * @param { CountryListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: CountryInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: CountryListInstanceEachOptions,
    callback?: (item: CountryInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;
  /**
   * Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CountryInstance[]) => any
  ): Promise<CountryInstance[]>;
  list(
    params: CountryListInstanceOptions,
    callback?: (error: Error | null, items: CountryInstance[]) => any
  ): Promise<CountryInstance[]>;
  /**
   * Retrieve a single page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;
  page(
    params: CountryListInstancePageOptions,
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CountryListInstance(version: V1): CountryListInstance {
  const instance = ((isoCode) => instance.get(isoCode)) as CountryListInstance;

  instance.get = function get(isoCode): CountryContext {
    return new CountryContextImpl(version, isoCode);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/DialingPermissions/Countries`;

  instance.page = function page(
    params?:
      | CountryListInstancePageOptions
      | ((error: Error | null, items: CountryPage) => any),
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["isoCode"] !== undefined) data["IsoCode"] = params["isoCode"];
    if (params["continent"] !== undefined)
      data["Continent"] = params["continent"];
    if (params["countryCode"] !== undefined)
      data["CountryCode"] = params["countryCode"];
    if (params["lowRiskNumbersEnabled"] !== undefined)
      data["LowRiskNumbersEnabled"] = serialize.bool(
        params["lowRiskNumbersEnabled"]
      );
    if (params["highRiskSpecialNumbersEnabled"] !== undefined)
      data["HighRiskSpecialNumbersEnabled"] = serialize.bool(
        params["highRiskSpecialNumbersEnabled"]
      );
    if (params["highRiskTollfraudNumbersEnabled"] !== undefined)
      data["HighRiskTollfraudNumbersEnabled"] = serialize.bool(
        params["highRiskTollfraudNumbersEnabled"]
      );
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
        new CountryPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CountryPage(instance._version, payload, instance._solution)
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

export class CountryPage extends Page<
  V1,
  CountryPayload,
  CountryResource,
  CountryInstance
> {
  /**
   * Initialize the CountryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CountrySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CountryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CountryResource): CountryInstance {
    return new CountryInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
