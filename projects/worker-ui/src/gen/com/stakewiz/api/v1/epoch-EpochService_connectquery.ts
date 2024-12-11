// @generated by protoc-gen-connect-query v2.0.0 with parameter "target=ts"
// @generated from file com/stakewiz/api/v1/epoch.proto (package com.stakewiz.api.v1, syntax proto3)
/* eslint-disable */

import { EpochService } from "./epoch_pb";

/**
 * Get the current epoch.
 *
 * @generated from rpc com.stakewiz.api.v1.EpochService.GetCurrentEpoch
 */
export const getCurrentEpoch = EpochService.method.getCurrentEpoch;

/**
 * Get the current epoch.
 *
 * @generated from rpc com.stakewiz.api.v1.EpochService.GetHistoricalEpoch
 */
export const getHistoricalEpoch = EpochService.method.getHistoricalEpoch;

/**
 * List all Epochs.
 *
 * @generated from rpc com.stakewiz.api.v1.EpochService.ListHistoricalEpochs
 */
export const listHistoricalEpochs = EpochService.method.listHistoricalEpochs;
