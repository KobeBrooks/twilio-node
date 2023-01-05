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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { PhoneNumberCapabilities } from "../../../../../../lib/interfaces";

/**
 * Options to pass to each
 */
export interface TollFreeListInstanceEachOptions {
  /** The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
  areaCode?: number;
  /** The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters. */
  contains?: string;
  /** Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
  smsEnabled?: boolean;
  /** Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
  mmsEnabled?: boolean;
  /** Whether the phone numbers can receive calls. Can be: `true` or `false`. */
  voiceEnabled?: boolean;
  /** Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeAllAddressRequired?: boolean;
  /** Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeLocalAddressRequired?: boolean;
  /** Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeForeignAddressRequired?: boolean;
  /** Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
  beta?: boolean;
  /** Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
  nearNumber?: string;
  /** Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
  nearLatLong?: string;
  /** The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
  distance?: number;
  /** Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
  inPostalCode?: string;
  /** Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
  inRegion?: string;
  /** Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
  inRateCenter?: string;
  /** Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
  inLata?: string;
  /** Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
  inLocality?: string;
  /** Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
  faxEnabled?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: TollFreeInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TollFreeListInstanceOptions {
  /** The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
  areaCode?: number;
  /** The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters. */
  contains?: string;
  /** Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
  smsEnabled?: boolean;
  /** Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
  mmsEnabled?: boolean;
  /** Whether the phone numbers can receive calls. Can be: `true` or `false`. */
  voiceEnabled?: boolean;
  /** Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeAllAddressRequired?: boolean;
  /** Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeLocalAddressRequired?: boolean;
  /** Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeForeignAddressRequired?: boolean;
  /** Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
  beta?: boolean;
  /** Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
  nearNumber?: string;
  /** Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
  nearLatLong?: string;
  /** The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
  distance?: number;
  /** Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
  inPostalCode?: string;
  /** Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
  inRegion?: string;
  /** Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
  inRateCenter?: string;
  /** Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
  inLata?: string;
  /** Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
  inLocality?: string;
  /** Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
  faxEnabled?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TollFreeListInstancePageOptions {
  /** The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada. */
  areaCode?: number;
  /** The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-2) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#local-get-basic-example-3). If specified, this value must have at least two characters. */
  contains?: string;
  /** Whether the phone numbers can receive text messages. Can be: `true` or `false`. */
  smsEnabled?: boolean;
  /** Whether the phone numbers can receive MMS messages. Can be: `true` or `false`. */
  mmsEnabled?: boolean;
  /** Whether the phone numbers can receive calls. Can be: `true` or `false`. */
  voiceEnabled?: boolean;
  /** Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeAllAddressRequired?: boolean;
  /** Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeLocalAddressRequired?: boolean;
  /** Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`. */
  excludeForeignAddressRequired?: boolean;
  /** Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`. */
  beta?: boolean;
  /** Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada. */
  nearNumber?: string;
  /** Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada. */
  nearLatLong?: string;
  /** The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada. */
  distance?: number;
  /** Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada. */
  inPostalCode?: string;
  /** Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada. */
  inRegion?: string;
  /** Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada. */
  inRateCenter?: string;
  /** Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada. */
  inLata?: string;
  /** Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number. */
  inLocality?: string;
  /** Whether the phone numbers can receive faxes. Can be: `true` or `false`. */
  faxEnabled?: boolean;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TollFreeSolution {
  accountSid: string;
  countryCode: string;
}

export interface TollFreeListInstance {
  _version: V2010;
  _solution: TollFreeSolution;
  _uri: string;

  /**
   * Streams TollFreeInstance records from the API.
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
   * @param { TollFreeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: TollFreeInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: TollFreeListInstanceEachOptions,
    callback?: (item: TollFreeInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of TollFreeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TollFreePage) => any
  ): Promise<TollFreePage>;
  /**
   * Lists TollFreeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TollFreeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: TollFreeInstance[]) => any
  ): Promise<TollFreeInstance[]>;
  list(
    params: TollFreeListInstanceOptions,
    callback?: (error: Error | null, items: TollFreeInstance[]) => any
  ): Promise<TollFreeInstance[]>;
  /**
   * Retrieve a single page of TollFreeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TollFreeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TollFreePage) => any
  ): Promise<TollFreePage>;
  page(
    params: TollFreeListInstancePageOptions,
    callback?: (error: Error | null, items: TollFreePage) => any
  ): Promise<TollFreePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TollFreeListInstance(
  version: V2010,
  accountSid: string,
  countryCode: string
): TollFreeListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(countryCode)) {
    throw new Error("Parameter 'countryCode' is not valid.");
  }

  const instance = {} as TollFreeListInstance;

  instance._version = version;
  instance._solution = { accountSid, countryCode };
  instance._uri = `/Accounts/${accountSid}/AvailablePhoneNumbers/${countryCode}/TollFree.json`;

  instance.page = function page(
    params?:
      | TollFreeListInstancePageOptions
      | ((error: Error | null, items: TollFreePage) => any),
    callback?: (error: Error | null, items: TollFreePage) => any
  ): Promise<TollFreePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["areaCode"] !== undefined) data["AreaCode"] = params["areaCode"];
    if (params["contains"] !== undefined) data["Contains"] = params["contains"];
    if (params["smsEnabled"] !== undefined)
      data["SmsEnabled"] = serialize.bool(params["smsEnabled"]);
    if (params["mmsEnabled"] !== undefined)
      data["MmsEnabled"] = serialize.bool(params["mmsEnabled"]);
    if (params["voiceEnabled"] !== undefined)
      data["VoiceEnabled"] = serialize.bool(params["voiceEnabled"]);
    if (params["excludeAllAddressRequired"] !== undefined)
      data["ExcludeAllAddressRequired"] = serialize.bool(
        params["excludeAllAddressRequired"]
      );
    if (params["excludeLocalAddressRequired"] !== undefined)
      data["ExcludeLocalAddressRequired"] = serialize.bool(
        params["excludeLocalAddressRequired"]
      );
    if (params["excludeForeignAddressRequired"] !== undefined)
      data["ExcludeForeignAddressRequired"] = serialize.bool(
        params["excludeForeignAddressRequired"]
      );
    if (params["beta"] !== undefined)
      data["Beta"] = serialize.bool(params["beta"]);
    if (params["nearNumber"] !== undefined)
      data["NearNumber"] = params["nearNumber"];
    if (params["nearLatLong"] !== undefined)
      data["NearLatLong"] = params["nearLatLong"];
    if (params["distance"] !== undefined) data["Distance"] = params["distance"];
    if (params["inPostalCode"] !== undefined)
      data["InPostalCode"] = params["inPostalCode"];
    if (params["inRegion"] !== undefined) data["InRegion"] = params["inRegion"];
    if (params["inRateCenter"] !== undefined)
      data["InRateCenter"] = params["inRateCenter"];
    if (params["inLata"] !== undefined) data["InLata"] = params["inLata"];
    if (params["inLocality"] !== undefined)
      data["InLocality"] = params["inLocality"];
    if (params["faxEnabled"] !== undefined)
      data["FaxEnabled"] = serialize.bool(params["faxEnabled"]);
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
        new TollFreePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: TollFreePage) => any
  ): Promise<TollFreePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new TollFreePage(instance._version, payload, instance._solution)
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

interface TollFreePayload extends TwilioResponsePayload {
  available_phone_numbers: TollFreeResource[];
}

interface TollFreeResource {
  friendly_name: string;
  phone_number: string;
  lata: string;
  locality: string;
  rate_center: string;
  latitude: number;
  longitude: number;
  region: string;
  postal_code: string;
  iso_country: string;
  address_requirements: string;
  beta: boolean;
  capabilities: PhoneNumberCapabilities;
}

export class TollFreeInstance {
  constructor(
    protected _version: V2010,
    payload: TollFreeResource,
    accountSid: string,
    countryCode: string
  ) {
    this.friendlyName = payload.friendly_name;
    this.phoneNumber = payload.phone_number;
    this.lata = payload.lata;
    this.locality = payload.locality;
    this.rateCenter = payload.rate_center;
    this.latitude = payload.latitude;
    this.longitude = payload.longitude;
    this.region = payload.region;
    this.postalCode = payload.postal_code;
    this.isoCountry = payload.iso_country;
    this.addressRequirements = payload.address_requirements;
    this.beta = payload.beta;
    this.capabilities = payload.capabilities;
  }

  /**
   * A formatted version of the phone number
   */
  friendlyName: string;
  /**
   * The phone number in E.164 format
   */
  phoneNumber: string;
  /**
   * The LATA of this phone number
   */
  lata: string;
  /**
   * The locality or city of this phone number\'s location
   */
  locality: string;
  /**
   * The rate center of this phone number
   */
  rateCenter: string;
  /**
   * The latitude of this phone number\'s location
   */
  latitude: number;
  /**
   * The longitude of this phone number\'s location
   */
  longitude: number;
  /**
   * The two-letter state or province abbreviation of this phone number\'s location
   */
  region: string;
  /**
   * The postal or ZIP code of this phone number\'s location
   */
  postalCode: string;
  /**
   * The ISO country code of this phone number
   */
  isoCountry: string;
  /**
   * The type of Address resource the phone number requires
   */
  addressRequirements: string;
  /**
   * Whether the phone number is new to the Twilio platform
   */
  beta: boolean;
  capabilities: PhoneNumberCapabilities;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      friendlyName: this.friendlyName,
      phoneNumber: this.phoneNumber,
      lata: this.lata,
      locality: this.locality,
      rateCenter: this.rateCenter,
      latitude: this.latitude,
      longitude: this.longitude,
      region: this.region,
      postalCode: this.postalCode,
      isoCountry: this.isoCountry,
      addressRequirements: this.addressRequirements,
      beta: this.beta,
      capabilities: this.capabilities,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class TollFreePage extends Page<
  V2010,
  TollFreePayload,
  TollFreeResource,
  TollFreeInstance
> {
  /**
   * Initialize the TollFreePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: TollFreeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TollFreeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TollFreeResource): TollFreeInstance {
    return new TollFreeInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.countryCode
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
