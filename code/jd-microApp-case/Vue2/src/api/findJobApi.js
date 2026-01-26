import http from '@/utils/http';

// 获取职位分页列表接口
const searchJobList=(params)=> {
  return http.postJson("/api/recruit/job/searchJobList", params).then(res => res.data);
}

// 省市区字典json
const getAddressDict = (params) => {
  return http.getJson("/api/code/common/areaTree.json", params).then(
    (res) => res.data
  );
}

// 获取职位详情接口
const getJobDetail = (params) => {
  return http.getJson("/api/recruit/job/getJobDetail", params).then(res => res.data);
}

export default {
  searchJobList,
  getAddressDict,
  getJobDetail
}