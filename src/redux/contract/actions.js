// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from 'redux-actions';

export const getAllContractsRequest = createAction('GET_ALL_CONTRACTS_REQUEST');
export const getAllContractsSuccess = createAction('GET_ALL_CONTRACTS_SUCCESS');
export const getAllContractsFailure = createAction('GET_ALL_CONTRACTS_FAILURE');

export const createContractRequest = createAction('CREATE_CONTRACT_REQUEST');
export const createContractSuccess = createAction('CREATE_CONTRACT_SUCCESS');
export const createContractFailure = createAction('CREATE_CONTRACT_FAILURE');
export const resetCreateContract = createAction('RESET_CREATE_CONTRACT');

export const updateContractRequest = createAction('UPDATE_CONTRACT_REQUEST');
export const updateContractSuccess = createAction('UPDATE_CONTRACT_SUCCESS');
export const updateContractFailure = createAction('UPDATE_CONTRACT_FAILURE');
export const resetUpdateContract = createAction('RESET_UPDATE_CONTRACT');

export const activeContractRequest = createAction('ACTIVE_CONTRACT_REQUEST');
export const activeContractSuccess = createAction('ACTIVE_CONTRACT_SUCCESS');
export const activeContractFailure = createAction('ACTIVE_CONTRACT_FAILURE');
export const resetActiveContract = createAction('RESET_ACTIVE_CONTRACT');

export const deleteContractRequest = createAction('DELETE_CONTRACT_REQUEST');
export const deleteContractSuccess = createAction('DELETE_CONTRACT_SUCCESS');
export const deleteContractFailure = createAction('DELETE_CONTRACT_FAILURE');
export const resetDeleteContract = createAction('RESET_DELETE_CONTRACT');

export const getHistoriesContractRequest = createAction('GET_HISTORIES_CONTRACT_REQUEST');
export const getHistoriesContractSuccess = createAction('GET_HISTORIES_CONTRACT_SUCCESS');
export const getHistoriesContractFailure = createAction('GET_HISTORIES_CONTRACT_FAILURE');

export const resetContractState = createAction('RESET_CONTRACT_STATE');
