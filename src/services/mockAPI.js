// 接口配置

// const LocalUrl = '/mock'                                                 // for local mock test

// const BaseUrl = '/mock'                                                  // for local mock test

// const url = 'http://127.0.0.1:18081'                                    // 后台链接
// const devUrl = 'http://weixin.aplusoffice.cn'
const devUrl = 'http://192.168.5.21:80'                             // 开发后台 url
// const devUrl = 'http://192.168.5.250:18081'                             // 开发后台 url
// const testUrl = 'http://192.168.5.250:18081'                             // 开发后台 url

export const rentUrl = devUrl + '/wx/listCollectRent'          // 租赁未交费用链接

export const rentHUrl = devUrl + '/wx/listCollectRentH'          // 租赁已交费用链接

export const FeeUrl = devUrl + '/wx/listFee'                   // 费用列表链接

export const pmUrl = devUrl + '/wx/listPropertyFee'            // 物业费未交用列表链接

export const pmHUrl = devUrl + '/wx/listPropertyFeeH'            // 物业已交费用列表链接

export const eleUrl = devUrl + '/wx/listWattHour'           // 电费未交列表链接

export const eleHUrl = devUrl + '/wx/listWattHourH'           // 电费已交列表链接

export const waterUrl = devUrl + '/wx/listWaterRecord'         // 水费未交列表链接

export const waterHUrl = devUrl + '/wx/listWaterRecordH'         // 水费已交列表链接

export const BUILDING_LIST = devUrl + '/wx/buildingList'                       // 绑定

export const BUILDING_REQUIRE =  devUrl + '/wx/bindingRoom'                // 绑定 - 请求绑定

export const BUILDING_DELETE =  devUrl + '/wx/deleteUserWx'                // 绑定 - 解除绑定

export const ROOM_LIST = devUrl + '/wx/listUserWX'                       // 绑定

export const BULLETIN = devUrl + '/wx/listNotice'                       // 公告

export const BULLETIN_DETAILS = devUrl + '/wx/getNotice'                // 公告详情

// 本地测试环境
export const FAULT = devUrl + '/wx/listRepair'                          // 故障报修 - '我的保修' 列表获取 // 正式: '/wx/listRepair'

export const FAULT_DETAIL = devUrl + '/wx/getDetails'              // 故障报修 - 详情 接口

export const TO_FAULT = devUrl + '/wx/saveRepair'                          // 我要报修 http://192.168.5.250:18081/wx/saveRepair

export const UPDATEE_REPAIR = devUrl + '/wx/updateRepair'              // 我的报修评价 -  接口

export const TO_PROPOSAL = devUrl + '/wx/saveComplaint'                          // 我要投诉 http://192.168.5.250:18081/wx/saveComplaint

export const PROPOSAL = devUrl + '/wx/listComplaint'                          //  '我的投诉' 列表获取

export const PROPOSAL_DETAIL = devUrl + '/wx/getComplaint'              // 我的投诉 - 详情 接口

export const PROPOSAL_UPDATE = devUrl + '/wx/updateComplaint'              // 我的投诉评价 -  接口
