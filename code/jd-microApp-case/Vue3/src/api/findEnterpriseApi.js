import http from '@/utils/http';

// 获取企业分页列表接口
const searchEnterprisePage=(params)=> {
  return http.postJson("/api/enterprise/searchEnterprisePage", params).then(res => res.data);
}

// 省市区字典json
const getAddressDict = (params) => {
  return http.getJson("/api/code/common/areaTree.json", params).then(
    (res) => res.data
  );
}

// 获取企业详情接口
const getEnterpriseDetail=(params)=> {
  return http.getJson("/api/recruit/job/getEnterpriseDetail", params).then(res => res.data);
}

export default {
  searchEnterprisePage,
  getAddressDict,
  getEnterpriseDetail
}