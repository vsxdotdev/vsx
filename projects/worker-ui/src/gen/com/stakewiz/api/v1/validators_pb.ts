// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file com/stakewiz/api/v1/validators.proto (package com.stakewiz.api.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file com/stakewiz/api/v1/validators.proto.
 */
export const file_com_stakewiz_api_v1_validators: GenFile = /*@__PURE__*/
  fileDesc("CiRjb20vc3Rha2V3aXovYXBpL3YxL3ZhbGlkYXRvcnMucHJvdG8SE2NvbS5zdGFrZXdpei5hcGkudjEiFwoVTGlzdFZhbGlkYXRvcnNSZXF1ZXN0IksKFkxpc3RWYWxpZGF0b3JzUmVzcG9uc2USMQoJdmFsaWRhdG9yGAEgAygLMh4uY29tLnN0YWtld2l6LmFwaS52MS5WYWxpZGF0b3IioBAKCVZhbGlkYXRvchIMCgRyYW5rGAEgASgNEhAKCGlkZW50aXR5GAIgASgJEiQKDXZvdGVfaWRlbnRpdHkYAyABKAlSDXZvdGVfaWRlbnRpdHkSHAoJbGFzdF92b3RlGAQgASgEUglsYXN0X3ZvdGUSHAoJcm9vdF9zbG90GAUgASgEUglyb290X3Nsb3QSDwoHY3JlZGl0cxgGIAEoBBIkCg1lcG9jaF9jcmVkaXRzGAcgASgEUg1lcG9jaF9jcmVkaXRzEigKD2FjdGl2YXRlZF9zdGFrZRgIIAEoAVIPYWN0aXZhdGVkX3N0YWtlEg8KB3ZlcnNpb24YCSABKAkSEgoKZGVsaW5xdWVudBgKIAEoCBIcCglza2lwX3JhdGUYCyABKAFSCXNraXBfcmF0ZRIeCgp1cGRhdGVkX2F0GAwgASgJUgp1cGRhdGVkX2F0EjYKFmZpcnN0X2Vwb2NoX3dpdGhfc3Rha2UYDSABKA1SFmZpcnN0X2Vwb2NoX3dpdGhfc3Rha2USDAoEbmFtZRgOIAEoCRIPCgdrZXliYXNlGA8gASgJEhMKC2Rlc2NyaXB0aW9uGBAgASgJEg8KB3dlYnNpdGUYESABKAkSEgoKY29tbWlzc2lvbhgSIAEoDRINCgVpbWFnZRgTIAEoCRIgCgtpcF9sYXRpdHVkZRgUIAEoCVILaXBfbGF0aXR1ZGUSIgoMaXBfbG9uZ2l0dWRlGBUgASgJUgxpcF9sb25naXR1ZGUSGAoHaXBfY2l0eRgWIAEoCVIHaXBfY2l0eRIeCgppcF9jb3VudHJ5GBcgASgJUgppcF9jb3VudHJ5EhYKBmlwX2FzbhgYIAEoCVIGaXBfYXNuEhYKBmlwX29yZxgZIAEoCVIGaXBfb3JnEgsKA21vZBgaIAEoCBIYCgdpc19qaXRvGBsgASgIUgdpc19qaXRvEjAKE2ppdG9fY29tbWlzc2lvbl9icHMYHCABKA1SE2ppdG9fY29tbWlzc2lvbl9icHMSIgoMdm90ZV9zdWNjZXNzGB0gASgBUgx2b3RlX3N1Y2Nlc3MSLgoSdm90ZV9zdWNjZXNzX3Njb3JlGB4gASgBUhJ2b3RlX3N1Y2Nlc3Nfc2NvcmUSKAoPc2tpcF9yYXRlX3Njb3JlGB8gASgBUg9za2lwX3JhdGVfc2NvcmUSHgoKaW5mb19zY29yZRggIAEoAVIKaW5mb19zY29yZRIqChBjb21taXNzaW9uX3Njb3JlGCEgASgBUhBjb21taXNzaW9uX3Njb3JlEjIKFGZpcnN0X2Vwb2NoX2Rpc3RhbmNlGCIgASgNUhRmaXJzdF9lcG9jaF9kaXN0YW5jZRIyChRlcG9jaF9kaXN0YW5jZV9zY29yZRgjIAEoAVIUZXBvY2hfZGlzdGFuY2Vfc2NvcmUSIgoMc3Rha2Vfd2VpZ2h0GCQgASgBUgxzdGFrZV93ZWlnaHQSKAoPYWJvdmVfaGFsdF9saW5lGCUgASgIUg9hYm92ZV9oYWx0X2xpbmUSLgoSc3Rha2Vfd2VpZ2h0X3Njb3JlGCYgASgBUhJzdGFrZV93ZWlnaHRfc2NvcmUSOgoYd2l0aGRyYXdfYXV0aG9yaXR5X3Njb3JlGCcgASgBUhh3aXRoZHJhd19hdXRob3JpdHlfc2NvcmUSCwoDYXNuGCggASgJEiwKEWFzbl9jb25jZW50cmF0aW9uGCkgASgBUhFhc25fY29uY2VudHJhdGlvbhI4Chdhc25fY29uY2VudHJhdGlvbl9zY29yZRgqIAEoAVIXYXNuX2NvbmNlbnRyYXRpb25fc2NvcmUSDgoGdXB0aW1lGCsgASgBEiIKDHVwdGltZV9zY29yZRgsIAEoAVIMdXB0aW1lX3Njb3JlEhwKCXdpel9zY29yZRgtIAEoAVIJd2l6X3Njb3JlEiQKDXZlcnNpb25fdmFsaWQYLiABKAhSDXZlcnNpb25fdmFsaWQSLgoSY2l0eV9jb25jZW50cmF0aW9uGC8gASgBUhJjaXR5X2NvbmNlbnRyYXRpb24SOgoYY2l0eV9jb25jZW50cmF0aW9uX3Njb3JlGDAgASgBUhhjaXR5X2NvbmNlbnRyYXRpb25fc2NvcmUSNAoVaW52YWxpZF92ZXJzaW9uX3Njb3JlGDEgASgBUhVpbnZhbGlkX3ZlcnNpb25fc2NvcmUSNAoVc3VwZXJtaW5vcml0eV9wZW5hbHR5GDIgASgBUhVzdXBlcm1pbm9yaXR5X3BlbmFsdHkSJAoNc2NvcmVfdmVyc2lvbhgzIAEoDVINc2NvcmVfdmVyc2lvbhIuChJub192b3Rpbmdfb3ZlcnJpZGUYNCABKAhSEm5vX3ZvdGluZ19vdmVycmlkZRINCgVlcG9jaBg1IAEoDRIsChFlcG9jaF9zbG90X2hlaWdodBg2IAEoDVIRZXBvY2hfc2xvdF9oZWlnaHQSNAoVYXNuY2l0eV9jb25jZW50cmF0aW9uGDcgASgBUhVhc25jaXR5X2NvbmNlbnRyYXRpb24SQAobYXNuY2l0eV9jb25jZW50cmF0aW9uX3Njb3JlGDggASgBUhthc25jaXR5X2NvbmNlbnRyYXRpb25fc2NvcmUSIAoLc3Rha2VfcmF0aW8YOSABKAFSC3N0YWtlX3JhdGlvEiIKDGNyZWRpdF9yYXRpbxg6IAEoAVIMY3JlZGl0X3JhdGlvEiIKDGFweV9lc3RpbWF0ZRg7IAEoAVIMYXB5X2VzdGltYXRlMn0KEFZhbGlkYXRvclNlcnZpY2USaQoOTGlzdFZhbGlkYXRvcnMSKi5jb20uc3Rha2V3aXouYXBpLnYxLkxpc3RWYWxpZGF0b3JzUmVxdWVzdBorLmNvbS5zdGFrZXdpei5hcGkudjEuTGlzdFZhbGlkYXRvcnNSZXNwb25zZUItWitnaXRodWIuY29tL3ZzeGRvdGRldi9jb20vc3Rha2V3aXovYXBpL3YxO3YxYgZwcm90bzM");

/**
 * The request message
 *
 * @generated from message com.stakewiz.api.v1.ListValidatorsRequest
 */
export type ListValidatorsRequest = Message<"com.stakewiz.api.v1.ListValidatorsRequest"> & {
};

/**
 * Describes the message com.stakewiz.api.v1.ListValidatorsRequest.
 * Use `create(ListValidatorsRequestSchema)` to create a new message.
 */
export const ListValidatorsRequestSchema: GenMessage<ListValidatorsRequest> = /*@__PURE__*/
  messageDesc(file_com_stakewiz_api_v1_validators, 0);

/**
 * The response message
 *
 * @generated from message com.stakewiz.api.v1.ListValidatorsResponse
 */
export type ListValidatorsResponse = Message<"com.stakewiz.api.v1.ListValidatorsResponse"> & {
  /**
   * @generated from field: repeated com.stakewiz.api.v1.Validator validator = 1;
   */
  validator: Validator[];
};

/**
 * Describes the message com.stakewiz.api.v1.ListValidatorsResponse.
 * Use `create(ListValidatorsResponseSchema)` to create a new message.
 */
export const ListValidatorsResponseSchema: GenMessage<ListValidatorsResponse> = /*@__PURE__*/
  messageDesc(file_com_stakewiz_api_v1_validators, 1);

/**
 * Validator is the information of a validator
 *
 * @generated from message com.stakewiz.api.v1.Validator
 */
export type Validator = Message<"com.stakewiz.api.v1.Validator"> & {
  /**
   * Rank of the validator
   *
   * @generated from field: uint32 rank = 1;
   */
  rank: number;

  /**
   * Validator's identity/pubkey
   *
   * @generated from field: string identity = 2;
   */
  identity: string;

  /**
   * Validator's vote account pubkey
   *
   * @generated from field: string vote_identity = 3 [json_name = "vote_identity"];
   */
  voteIdentity: string;

  /**
   * Slot of the validator's last vote
   *
   * @generated from field: uint64 last_vote = 4 [json_name = "last_vote"];
   */
  lastVote: bigint;

  /**
   * Root slot of the validator
   *
   * @generated from field: uint64 root_slot = 5 [json_name = "root_slot"];
   */
  rootSlot: bigint;

  /**
   * Total credits earned by the validator
   *
   * @generated from field: uint64 credits = 6;
   */
  credits: bigint;

  /**
   * Credits earned in the current epoch
   *
   * @generated from field: uint64 epoch_credits = 7 [json_name = "epoch_credits"];
   */
  epochCredits: bigint;

  /**
   * Amount of activated stake
   *
   * @generated from field: double activated_stake = 8 [json_name = "activated_stake"];
   */
  activatedStake: number;

  /**
   * Version of the validator's software
   *
   * @generated from field: string version = 9;
   */
  version: string;

  /**
   * Whether the validator is delinquent
   *
   * @generated from field: bool delinquent = 10;
   */
  delinquent: boolean;

  /**
   * Validator's skip rate
   *
   * @generated from field: double skip_rate = 11 [json_name = "skip_rate"];
   */
  skipRate: number;

  /**
   * Timestamp of the last update
   *
   * @generated from field: string updated_at = 12 [json_name = "updated_at"];
   */
  updatedAt: string;

  /**
   * First epoch the validator had stake
   *
   * @generated from field: uint32 first_epoch_with_stake = 13 [json_name = "first_epoch_with_stake"];
   */
  firstEpochWithStake: number;

  /**
   * Validator's name
   *
   * @generated from field: string name = 14;
   */
  name: string;

  /**
   * Validator's Keybase username
   *
   * @generated from field: string keybase = 15;
   */
  keybase: string;

  /**
   * Validator's description
   *
   * @generated from field: string description = 16;
   */
  description: string;

  /**
   * Validator's website
   *
   * @generated from field: string website = 17;
   */
  website: string;

  /**
   * Validator's commission rate
   *
   * @generated from field: uint32 commission = 18;
   */
  commission: number;

  /**
   * URL to the validator's image
   *
   * @generated from field: string image = 19;
   */
  image: string;

  /**
   * Latitude of the validator's IP address
   *
   * @generated from field: string ip_latitude = 20 [json_name = "ip_latitude"];
   */
  ipLatitude: string;

  /**
   * Longitude of the validator's IP address
   *
   * @generated from field: string ip_longitude = 21 [json_name = "ip_longitude"];
   */
  ipLongitude: string;

  /**
   * City of the validator's IP address
   *
   * @generated from field: string ip_city = 22 [json_name = "ip_city"];
   */
  ipCity: string;

  /**
   * Country of the validator's IP address
   *
   * @generated from field: string ip_country = 23 [json_name = "ip_country"];
   */
  ipCountry: string;

  /**
   * ASN of the validator's IP address
   *
   * @generated from field: string ip_asn = 24 [json_name = "ip_asn"];
   */
  ipAsn: string;

  /**
   * Organization of the validator's IP address
   *
   * @generated from field: string ip_org = 25 [json_name = "ip_org"];
   */
  ipOrg: string;

  /**
   * Whether the validator is a moderator
   *
   * @generated from field: bool mod = 26;
   */
  mod: boolean;

  /**
   * Whether the validator is a Jito validator
   *
   * @generated from field: bool is_jito = 27 [json_name = "is_jito"];
   */
  isJito: boolean;

  /**
   * Jito validator's commission in basis points
   *
   * @generated from field: uint32 jito_commission_bps = 28 [json_name = "jito_commission_bps"];
   */
  jitoCommissionBps: number;

  /**
   * Validator's vote success rate
   *
   * @generated from field: double vote_success = 29 [json_name = "vote_success"];
   */
  voteSuccess: number;

  /**
   * Score based on vote success rate
   *
   * @generated from field: double vote_success_score = 30 [json_name = "vote_success_score"];
   */
  voteSuccessScore: number;

  /**
   * Score based on skip rate
   *
   * @generated from field: double skip_rate_score = 31 [json_name = "skip_rate_score"];
   */
  skipRateScore: number;

  /**
   * Score based on validator information
   *
   * @generated from field: double info_score = 32 [json_name = "info_score"];
   */
  infoScore: number;

  /**
   * Score based on commission rate
   *
   * @generated from field: double commission_score = 33 [json_name = "commission_score"];
   */
  commissionScore: number;

  /**
   * Distance from the first epoch with stake
   *
   * @generated from field: uint32 first_epoch_distance = 34 [json_name = "first_epoch_distance"];
   */
  firstEpochDistance: number;

  /**
   * Score based on epoch distance
   *
   * @generated from field: double epoch_distance_score = 35 [json_name = "epoch_distance_score"];
   */
  epochDistanceScore: number;

  /**
   * Validator's stake weight
   *
   * @generated from field: double stake_weight = 36 [json_name = "stake_weight"];
   */
  stakeWeight: number;

  /**
   * Whether the validator is above the halt line
   *
   * @generated from field: bool above_halt_line = 37 [json_name = "above_halt_line"];
   */
  aboveHaltLine: boolean;

  /**
   * Score based on stake weight
   *
   * @generated from field: double stake_weight_score = 38 [json_name = "stake_weight_score"];
   */
  stakeWeightScore: number;

  /**
   * Score based on withdraw authority
   *
   * @generated from field: double withdraw_authority_score = 39 [json_name = "withdraw_authority_score"];
   */
  withdrawAuthorityScore: number;

  /**
   * Autonomous System Number
   *
   * @generated from field: string asn = 40;
   */
  asn: string;

  /**
   * ASN concentration
   *
   * @generated from field: double asn_concentration = 41 [json_name = "asn_concentration"];
   */
  asnConcentration: number;

  /**
   * Score based on ASN concentration
   *
   * @generated from field: double asn_concentration_score = 42 [json_name = "asn_concentration_score"];
   */
  asnConcentrationScore: number;

  /**
   * Validator's uptime
   *
   * @generated from field: double uptime = 43;
   */
  uptime: number;

  /**
   * Score based on uptime
   *
   * @generated from field: double uptime_score = 44 [json_name = "uptime_score"];
   */
  uptimeScore: number;

  /**
   * Overall Wiz score
   *
   * @generated from field: double wiz_score = 45 [json_name = "wiz_score"];
   */
  wizScore: number;

  /**
   * Whether the validator's version is valid
   *
   * @generated from field: bool version_valid = 46 [json_name = "version_valid"];
   */
  versionValid: boolean;

  /**
   * City concentration
   *
   * @generated from field: double city_concentration = 47 [json_name = "city_concentration"];
   */
  cityConcentration: number;

  /**
   * Score based on city concentration
   *
   * @generated from field: double city_concentration_score = 48 [json_name = "city_concentration_score"];
   */
  cityConcentrationScore: number;

  /**
   * Score penalty for invalid version
   *
   * @generated from field: double invalid_version_score = 49 [json_name = "invalid_version_score"];
   */
  invalidVersionScore: number;

  /**
   * Superminority penalty
   *
   * @generated from field: double superminority_penalty = 50 [json_name = "superminority_penalty"];
   */
  superminorityPenalty: number;

  /**
   * Version of the scoring algorithm
   *
   * @generated from field: uint32 score_version = 51 [json_name = "score_version"];
   */
  scoreVersion: number;

  /**
   * No voting override flag
   *
   * @generated from field: bool no_voting_override = 52 [json_name = "no_voting_override"];
   */
  noVotingOverride: boolean;

  /**
   * Current epoch
   *
   * @generated from field: uint32 epoch = 53;
   */
  epoch: number;

  /**
   * Epoch slot height
   *
   * @generated from field: uint32 epoch_slot_height = 54 [json_name = "epoch_slot_height"];
   */
  epochSlotHeight: number;

  /**
   * ASN and City concentration
   *
   * @generated from field: double asncity_concentration = 55 [json_name = "asncity_concentration"];
   */
  asncityConcentration: number;

  /**
   * Score based on ASN and City concentration
   *
   * @generated from field: double asncity_concentration_score = 56 [json_name = "asncity_concentration_score"];
   */
  asncityConcentrationScore: number;

  /**
   * Stake ratio
   *
   * @generated from field: double stake_ratio = 57 [json_name = "stake_ratio"];
   */
  stakeRatio: number;

  /**
   * Credit ratio
   *
   * @generated from field: double credit_ratio = 58 [json_name = "credit_ratio"];
   */
  creditRatio: number;

  /**
   * APY estimate
   *
   * @generated from field: double apy_estimate = 59 [json_name = "apy_estimate"];
   */
  apyEstimate: number;
};

/**
 * Describes the message com.stakewiz.api.v1.Validator.
 * Use `create(ValidatorSchema)` to create a new message.
 */
export const ValidatorSchema: GenMessage<Validator> = /*@__PURE__*/
  messageDesc(file_com_stakewiz_api_v1_validators, 2);

/**
 * The Validator service definition.
 *
 * @generated from service com.stakewiz.api.v1.ValidatorService
 */
export const ValidatorService: GenService<{
  /**
   * List all validators.
   *
   * @generated from rpc com.stakewiz.api.v1.ValidatorService.ListValidators
   */
  listValidators: {
    methodKind: "unary";
    input: typeof ListValidatorsRequestSchema;
    output: typeof ListValidatorsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_com_stakewiz_api_v1_validators, 0);

