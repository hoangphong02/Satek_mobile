/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from 'redux-actions';

export const getSalaryRequest = createAction('GET_SALARY_REQUEST');
export const getSalarySuccess = createAction('GET_SALARY_SUCCESS');
export const getSalaryFailure = createAction('GET_SALARY_FAILURE');

export const createSalaryRequest = createAction('CREATE_SALARY_REQUEST');
export const createSalarySuccess = createAction('CREATE_SALARY_SUCCESS');
export const createSalaryFailure = createAction('CREATE_SALARY_FAILURE');
export const resetCreateSalaryState = createAction('RESET_CREATE_SALARY_STATE');

export const getBalanceRequest = createAction('GET_BALANCE_REQUEST');
export const getBalanceSuccess = createAction('GET_BALANCE_SUCCESS');
export const getBalanceFailure = createAction('GET_BALANCE_FAILURE');
export const resetGetBalanceState = createAction('RESET_GET_BALANCE_STATE');

export const resetSalaryState = createAction('RESET_SALARY_STATE');
