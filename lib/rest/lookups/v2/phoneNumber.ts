/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Lookups
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type PhoneNumberValidationError =
  | "TOO_SHORT"
  | "TOO_LONG"
  | "INVALID_BUT_POSSIBLE"
  | "INVALID_COUNTRY_CODE"
  | "INVALID_LENGTH"
  | "NOT_A_NUMBER";

/**
 * Options to pass to fetch a PhoneNumberInstance
 */
export interface PhoneNumberContextFetchOptions {
  /** A comma-separated list of fields to return. Possible values are caller_name, sim_swap, call_forwarding, live_activity, line_type_intelligence, identity_match. */
  fields?: string;
  /** The [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) used if the phone number provided is in national format. */
  countryCode?: string;
  /** User’s first name. This query parameter is only used (optionally) for identity_match package requests. */
  firstName?: string;
  /** User’s last name. This query parameter is only used (optionally) for identity_match package requests. */
  lastName?: string;
  /** User’s first address line. This query parameter is only used (optionally) for identity_match package requests. */
  addressLine1?: string;
  /** User’s second address line. This query parameter is only used (optionally) for identity_match package requests. */
  addressLine2?: string;
  /** User’s city. This query parameter is only used (optionally) for identity_match package requests. */
  city?: string;
  /** User’s country subdivision, such as state, province, or locality. This query parameter is only used (optionally) for identity_match package requests. */
  state?: string;
  /** User’s postal zip code. This query parameter is only used (optionally) for identity_match package requests. */
  postalCode?: string;
  /** User’s country, up to two characters. This query parameter is only used (optionally) for identity_match package requests. */
  addressCountryCode?: string;
  /** User’s national ID, such as SSN or Passport ID. This query parameter is only used (optionally) for identity_match package requests. */
  nationalId?: string;
  /** User’s date of birth, in YYYYMMDD format. This query parameter is only used (optionally) for identity_match package requests. */
  dateOfBirth?: string;
}

export interface PhoneNumberContext {
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    params: PhoneNumberContextFetchOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PhoneNumberContextSolution {
  phoneNumber: string;
}

export class PhoneNumberContextImpl implements PhoneNumberContext {
  protected _solution: PhoneNumberContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, phoneNumber: string) {
    if (!isValidPathParam(phoneNumber)) {
      throw new Error("Parameter 'phoneNumber' is not valid.");
    }

    this._solution = { phoneNumber };
    this._uri = `/PhoneNumbers/${phoneNumber}`;
  }

  fetch(
    params?:
      | PhoneNumberContextFetchOptions
      | ((error: Error | null, item?: PhoneNumberInstance) => any),
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["fields"] !== undefined) data["Fields"] = params["fields"];
    if (params["countryCode"] !== undefined)
      data["CountryCode"] = params["countryCode"];
    if (params["firstName"] !== undefined)
      data["FirstName"] = params["firstName"];
    if (params["lastName"] !== undefined) data["LastName"] = params["lastName"];
    if (params["addressLine1"] !== undefined)
      data["AddressLine1"] = params["addressLine1"];
    if (params["addressLine2"] !== undefined)
      data["AddressLine2"] = params["addressLine2"];
    if (params["city"] !== undefined) data["City"] = params["city"];
    if (params["state"] !== undefined) data["State"] = params["state"];
    if (params["postalCode"] !== undefined)
      data["PostalCode"] = params["postalCode"];
    if (params["addressCountryCode"] !== undefined)
      data["AddressCountryCode"] = params["addressCountryCode"];
    if (params["nationalId"] !== undefined)
      data["NationalId"] = params["nationalId"];
    if (params["dateOfBirth"] !== undefined)
      data["DateOfBirth"] = params["dateOfBirth"];

    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PhoneNumberInstance(
          operationVersion,
          payload,
          instance._solution.phoneNumber
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

interface PhoneNumberPayload extends PhoneNumberResource {}

interface PhoneNumberResource {
  calling_country_code: string;
  country_code: string;
  phone_number: string;
  national_format: string;
  valid: boolean;
  validation_errors: Array<PhoneNumberValidationError>;
  caller_name: any;
  sim_swap: any;
  call_forwarding: any;
  live_activity: any;
  line_type_intelligence: any;
  identity_match: any;
  url: string;
}

export class PhoneNumberInstance {
  protected _solution: PhoneNumberContextSolution;
  protected _context?: PhoneNumberContext;

  constructor(
    protected _version: V2,
    payload: PhoneNumberResource,
    phoneNumber?: string
  ) {
    this.callingCountryCode = payload.calling_country_code;
    this.countryCode = payload.country_code;
    this.phoneNumber = payload.phone_number;
    this.nationalFormat = payload.national_format;
    this.valid = payload.valid;
    this.validationErrors = payload.validation_errors;
    this.callerName = payload.caller_name;
    this.simSwap = payload.sim_swap;
    this.callForwarding = payload.call_forwarding;
    this.liveActivity = payload.live_activity;
    this.lineTypeIntelligence = payload.line_type_intelligence;
    this.identityMatch = payload.identity_match;
    this.url = payload.url;

    this._solution = { phoneNumber: phoneNumber || this.phoneNumber };
  }

  /**
   * International dialing prefix
   */
  callingCountryCode: string;
  /**
   * Phone number\'s ISO country code
   */
  countryCode: string;
  /**
   * Phone number in E.164 format
   */
  phoneNumber: string;
  /**
   * Phone number in national format
   */
  nationalFormat: string;
  /**
   * Boolean which indicates if the phone number is valid
   */
  valid: boolean;
  /**
   * Contains reasons why a phone number is invalid
   */
  validationErrors: Array<PhoneNumberValidationError>;
  /**
   * An object that contains caller name information
   */
  callerName: any;
  /**
   * An object that contains SIM swap information
   */
  simSwap: any;
  /**
   * An object that contains call forwarding status information
   */
  callForwarding: any;
  /**
   * An object that contains live activity information
   */
  liveActivity: any;
  /**
   * An object that contains line type information
   */
  lineTypeIntelligence: any;
  /**
   * An object that contains identity match information
   */
  identityMatch: any;
  /**
   * The absolute URL of the resource
   */
  url: string;

  private get _proxy(): PhoneNumberContext {
    this._context =
      this._context ||
      new PhoneNumberContextImpl(this._version, this._solution.phoneNumber);
    return this._context;
  }

  /**
   * Fetch a PhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;
  /**
   * Fetch a PhoneNumberInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PhoneNumberInstance
   */
  fetch(
    params: PhoneNumberContextFetchOptions,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: PhoneNumberInstance) => any
  ): Promise<PhoneNumberInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      callingCountryCode: this.callingCountryCode,
      countryCode: this.countryCode,
      phoneNumber: this.phoneNumber,
      nationalFormat: this.nationalFormat,
      valid: this.valid,
      validationErrors: this.validationErrors,
      callerName: this.callerName,
      simSwap: this.simSwap,
      callForwarding: this.callForwarding,
      liveActivity: this.liveActivity,
      lineTypeIntelligence: this.lineTypeIntelligence,
      identityMatch: this.identityMatch,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PhoneNumberSolution {}

export interface PhoneNumberListInstance {
  _version: V2;
  _solution: PhoneNumberSolution;
  _uri: string;

  (phoneNumber: string): PhoneNumberContext;
  get(phoneNumber: string): PhoneNumberContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PhoneNumberListInstance(version: V2): PhoneNumberListInstance {
  const instance = ((phoneNumber) =>
    instance.get(phoneNumber)) as PhoneNumberListInstance;

  instance.get = function get(phoneNumber): PhoneNumberContext {
    return new PhoneNumberContextImpl(version, phoneNumber);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
