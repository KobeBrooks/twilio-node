/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type VerificationCheckChannel = "sms" | "call" | "email" | "whatsapp" | "sna";

/**
 * Options to pass to create a VerificationCheckInstance
 */
export interface VerificationCheckListInstanceCreateOptions {
  /** The 4-10 character string being verified. */
  code?: string;
  /** The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Either this parameter or the `verification_sid` must be specified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164). */
  to?: string;
  /** A SID that uniquely identifies the Verification Check. Either this parameter or the `to` phone number/[email](https://www.twilio.com/docs/verify/email) must be specified. */
  verificationSid?: string;
  /** The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
  amount?: string;
  /** The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled. */
  payee?: string;
}

export interface VerificationCheckSolution {
  serviceSid: string;
}

export interface VerificationCheckListInstance {
  _version: V2;
  _solution: VerificationCheckSolution;
  _uri: string;

  /**
   * Create a VerificationCheckInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationCheckInstance
   */
  create(
    callback?: (error: Error | null, item?: VerificationCheckInstance) => any
  ): Promise<VerificationCheckInstance>;
  /**
   * Create a VerificationCheckInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationCheckInstance
   */
  create(
    params: VerificationCheckListInstanceCreateOptions,
    callback?: (error: Error | null, item?: VerificationCheckInstance) => any
  ): Promise<VerificationCheckInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function VerificationCheckListInstance(
  version: V2,
  serviceSid: string
): VerificationCheckListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = {} as VerificationCheckListInstance;

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/VerificationCheck`;

  instance.create = function create(
    params?:
      | VerificationCheckListInstanceCreateOptions
      | ((error: Error | null, items: VerificationCheckInstance) => any),
    callback?: (error: Error | null, items: VerificationCheckInstance) => any
  ): Promise<VerificationCheckInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["code"] !== undefined) data["Code"] = params["code"];
    if (params["to"] !== undefined) data["To"] = params["to"];
    if (params["verificationSid"] !== undefined)
      data["VerificationSid"] = params["verificationSid"];
    if (params["amount"] !== undefined) data["Amount"] = params["amount"];
    if (params["payee"] !== undefined) data["Payee"] = params["payee"];

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
      (payload) =>
        new VerificationCheckInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface VerificationCheckPayload extends VerificationCheckResource {}

interface VerificationCheckResource {
  sid: string;
  service_sid: string;
  account_sid: string;
  to: string;
  channel: VerificationCheckChannel;
  status: string;
  valid: boolean;
  amount: string;
  payee: string;
  date_created: Date;
  date_updated: Date;
  sna_attempts_error_codes: Array<any>;
}

export class VerificationCheckInstance {
  constructor(
    protected _version: V2,
    payload: VerificationCheckResource,
    serviceSid: string
  ) {
    this.sid = payload.sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.to = payload.to;
    this.channel = payload.channel;
    this.status = payload.status;
    this.valid = payload.valid;
    this.amount = payload.amount;
    this.payee = payload.payee;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.snaAttemptsErrorCodes = payload.sna_attempts_error_codes;
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the Service that the resource is associated with
   */
  serviceSid: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The phone number or email being verified
   */
  to: string;
  channel: VerificationCheckChannel;
  /**
   * The status of the verification resource
   */
  status: string;
  /**
   * Whether the verification was successful
   */
  valid: boolean;
  /**
   * The amount of the associated PSD2 compliant transaction.
   */
  amount: string;
  /**
   * The payee of the associated PSD2 compliant transaction
   */
  payee: string;
  /**
   * The ISO 8601 date and time in GMT when the Verification Check resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the Verification Check resource was last updated
   */
  dateUpdated: Date;
  /**
   * List of error codes as a result of attempting a verification using the `sna` channel.
   */
  snaAttemptsErrorCodes: Array<any>;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      to: this.to,
      channel: this.channel,
      status: this.status,
      valid: this.valid,
      amount: this.amount,
      payee: this.payee,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      snaAttemptsErrorCodes: this.snaAttemptsErrorCodes,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
