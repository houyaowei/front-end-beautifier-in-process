<script setup>
import { watch, ref, onMounted, reactive, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
import findEnterpriseApi from "@/api/findEnterpriseApi";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const isExpand2 = ref(false);
const state = reactive({
    addressDict: [],
    cityArr: [],
    enterList: [],
    enterpriseList: [],
    total: 0,
    pageSize: 10,
    pageNumber: 1,
});
const enterpriseScaleArr = reactive([
    {
        label: "50人以下",
        value: "50",
    },
    {
        label: "51-100人",
        value: "100",
    },
    {
        label: "101-200人",
        value: "200",
    },
    {
        label: "201-500人",
        value: "500",
    },
    {
        label: "501-1000人",
        value: "1000",
    },
    {
        label: "1000人以上",
        value: "1001",
    },
]);

const welfareOptions = reactive([
    {
        label: "加班补贴",
        value: "加班补贴",
    },
    {
        label: "交通补贴",
        value: "交通补贴",
    },
    {
        label: "住房补贴",
        value: "住房补贴",
    },
    {
        label: "包住",
        value: "包住",
    },
    {
        label: "双休",
        value: "双休",
    },
    {
        label: "包吃",
        value: "包吃",
    },
    {
        label: "带薪年假",
        value: "带薪年假",
    },
    {
        label: "年终奖",
        value: "年终奖",
    },
]);

const addressActive = ref(0);
const enterpriseScaleActive = ref(0);
const welfareTagsActive = ref(0);
const city = ref("");
const scale = ref("");
const welfareTag = ref("");
const searchName = ref("");

onMounted(() => {
    getAddressDict();
    searchEnterprisePage();
    console.log("获取全局数据", route.query);
});

function searchEnterprisePage() {
    const params = {
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        city: city.value,
        scale: scale.value,
        welfareTag: welfareTag.value,
        searchName: searchName.value,
    };

    findEnterpriseApi.searchEnterprisePage(params).then((res) => {
        console.log(res);
        const { success, message, data } = res;
        if (success) {
            let { records, total } = data;
            records &&
                records.filter((item) => {
                    item.welfareTag =
                        item.welfareTag && item.welfareTag.split(",");
                });
            state.enterList = records;
            state.total = total;
            let arr = [...records];
            state.enterpriseList = arr.splice(0, 7);
            console.log(state.enterList);
        } else {
            proxy.$message.error(message);
        }
    });
}

function handleAll(flag) {
    if (flag === "address") {
        addressActive.value = false;
        city.value = null;
    } else if (flag === "enterpriseScale") {
        enterpriseScaleActive.value = false;
        scale.value = null;
    } else if (flag === "welfareTags") {
        welfareTagsActive.value = false;
        welfareTag.value = null;
    }
    searchEnterprisePage();
}

function getAddressDict() {
    findEnterpriseApi.getAddressDict({}).then((res) => {
        console.log(res);
        state.addressDict = res;
        console.log(state.addressDict);
    });
}

function getCities(e) {
    state.cityArr = e.l;
}

function changeJob(e, flag) {
    if (flag === "地点") {
        e.value = e.c;
        e.label = e.n;
        addressActive.value = e.c;
        city.value = e.n;
    } else if (flag === "规模") {
        enterpriseScaleActive.value = e.value;
        scale.value = e.value;
    } else if (flag === "福利") {
        welfareTagsActive.value = e.value;
        welfareTag.value = e.value;
    }
    searchEnterprisePage();
}

function handleSizeChange(val) {
    state.pageSize = val;
    searchEnterprisePage();
}
function handleCurrentChange(val) {
    state.pageNumber = val;
    searchEnterprisePage();
}
function toEnterpriseDetail(item) {
    let { id } = item;
    router.push(`/enterpriseDetail?enterpriseId=${item.id}`);
}

function moreWords() {
    isExpand2.value = !isExpand2.value;
}
</script>

<template>
    <div class="enterprise-page">
        <!-- 搜索 -->
        <div class="header-search-outer">
            <div class="home-search">
                <el-input
                    placeholder="请输入公司名称"
                    v-model="searchName"
                    clearable
                    @clear="searchEnterprisePage"
                >
                    <template #append>
                        <el-button @click="searchEnterprisePage"
                            >搜索</el-button
                        >
                    </template>
                </el-input>
            </div>
        </div>

        <div class="search-header w-1200-auto">
            <!-- 筛选 -->
            <div class="filters">
                <!-- 地点 -->
                <div class="item filter-address">
                    <span class="more-btn" @click="moreWords(2)">
                        {{ isExpand2 ? "收起" : "更多" }}
                        <i class="el-icon-arrow-down"></i>
                    </span>
                    <label>地点：</label>
                    <p :class="['labels info-menu', { expand: isExpand2 }]">
                        <span
                            :class="!addressActive && 'el-tag'"
                            @click="handleAll('address')"
                            >全部</span
                        >
                        <span
                            v-for="(item, index) in state.addressDict"
                            :key="index"
                            @click="getCities(item)"
                            >{{ item.n }}</span
                        >
                    </p>
                    <p class="cities" v-if="state.cityArr.length > 0">
                        <span
                            :class="[addressActive == item.value && 'el-tag']"
                            v-for="(item, index) in state.cityArr"
                            :key="index"
                            @click="changeJob(item, '地点')"
                            >{{ item.n }}</span
                        >
                    </p>
                </div>
                <!-- 规模 -->
                <div class="item filter-salary pr-0">
                    <label>规模：</label>
                    <p class="labels">
                        <span
                            :class="!enterpriseScaleActive && 'el-tag'"
                            @click="handleAll('enterpriseScale')"
                            >全部</span
                        >
                        <span
                            :class="[
                                enterpriseScaleActive == item.value && 'el-tag',
                            ]"
                            v-for="(item, index) in enterpriseScaleArr"
                            :key="index"
                            @click="changeJob(item, '规模')"
                            >{{ item.label }}</span
                        >
                    </p>
                </div>
                <!-- 福利 -->
                <div class="item filter-select">
                    <label>福利：</label>
                    <p class="labels">
                        <span
                            :class="!welfareTagsActive && 'el-tag'"
                            @click="handleAll('welfareTags')"
                            >全部</span
                        >
                        <span
                            :class="[
                                welfareTagsActive == item.value && 'el-tag',
                            ]"
                            v-for="(item, index) in welfareOptions"
                            :key="index"
                            @click="changeJob(item, '福利')"
                            >{{ item.label }}</span
                        >
                    </p>
                </div>
            </div>
        </div>

        <!-- 表格 -->
        <div class="enter-part mt-15">
            <!-- 左侧 -->
            <ul
                class="enter-list"
                v-if="state.enterList && state.enterList.length > 0"
            >
                <li v-for="(item, index) in state.enterList" :key="index">
                    <div class="part-1">
                        <img
                            v-if="item.logo"
                            :src="item.logo"
                            :alt="item.enterpriseName"
                        />
                        <img
                            v-else
                            src="../assets/images/findEnterprise/default_company.png"
                            :alt="item.name"
                        />
                        <div class="flex-layout">
                            <div class="comp-mess">
                                <p
                                    class="title"
                                    @click="toEnterpriseDetail(item)"
                                >
                                    {{ item.name }}
                                </p>
                                <p>
                                    <span class="label" v-if="item.industry">{{
                                        item.industry
                                    }}</span>
                                    <span class="label" v-if="item.scale"
                                        >{{ item.scale }}人以上</span
                                    >
                                </p>
                            </div>
                            <p class="hot">
                                <svg
                                    t="1688535554921"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="2346"
                                    width="16"
                                    height="16"
                                >
                                    <path
                                        d="M428.6976 107.3152c-6.5024 72.192-36.352 207.2576-160.256 337.408 3.6864-48.0256-7.1168-83.7632-19.0464-107.6736-6.6048-13.1584-26.0608-10.5984-28.8768 3.84-5.7344 29.44-20.5824 75.0592-57.6 137.7792-71.6288 121.3952-62.5664 459.8784 340.736 459.8784s430.4384-352.8192 373.1456-496.0256c-37.376-93.44-93.952-152.5248-128.8192-182.3232-11.4176-9.7792-29.1328-1.9456-29.5936 13.056-0.9216 30.464-7.3216 73.3696-33.0752 102.144-0.6656-52.7872-38.144-208.384-202.4448-296.8576-23.296-12.544-51.7632 2.4576-54.1696 28.7744z"
                                        fill="#FF5D50"
                                        p-id="2347"
                                    />
                                    <path
                                        d="M702.2592 678.4c-4.1984-45.056-60.672-166.5536-212.6336-246.4256-10.5984-5.5808-23.0912 3.1232-21.504 15.0016 6.2464 46.848 12.9536 140.4928-24.064 184.7296 4.0448-40.3968-18.1248-73.8304-36.6592-94.3104-8.3968-9.216-23.552-4.6592-25.4976 7.68-3.5328 22.3232-12.8512 56.2688-36.5568 97.9456-42.0864 74.0352-86.9888 188.672 124.5696 294.656 10.9568 0.5632 22.1696 0.8704 33.7408 0.8704 11.2128 0 22.0672-0.3072 32.7168-0.8704 158.2592-59.4944 173.4656-177.9712 165.888-259.2768z"
                                        fill="#FFDF99"
                                        p-id="2348"
                                    />
                                </svg>
                                热招
                                <span class="orange">{{ item.jobTitle }}</span>
                                {{
                                    item.salaryRange === "不限"
                                        ? "薪资不限"
                                        : item.salaryRange
                                }}
                            </p>
                        </div>
                    </div>
                    <div
                        class="part-2"
                        v-if="item.welfareTag && item.welfareTag.length > 0"
                    >
                        <p class="labels">
                            <span
                                v-for="(
                                    itemInner, indexInner
                                ) in item.welfareTag"
                                :key="indexInner"
                            >
                                {{ itemInner }}
                                <el-divider
                                    direction="vertical"
                                    v-if="
                                        indexInner < item.welfareTag.length - 1
                                    "
                                ></el-divider>
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
            <el-empty
                style="justify-content: flex-start"
                v-else
                class="margin-center mtv-"
                description="暂无企业"
            ></el-empty>
            <!-- 右侧 -->
            <div class="recommend-comp">
                <h3 class="hui-title">推荐企业</h3>
                <el-divider></el-divider>
                <ul
                    v-if="
                        state.enterpriseList && state.enterpriseList.length > 0
                    "
                >
                    <li
                        v-for="(item, index) in state.enterpriseList"
                        :key="index"
                        @click="toEnterpriseDetail(item)"
                    >
                        <img :src="item.logo" :alt="item.name" />
                        <p>{{ item.name }}</p>
                    </li>
                </ul>
                <el-empty v-else description="虚位以待"></el-empty>
            </div>
        </div>

        <el-pagination
            class="w-1200-auto mt-20 text-center"
            :current-page.sync="pageNumber"
            background
            layout="total,sizes,prev, pager, next"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="10"
            :total="state.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        ></el-pagination>
    </div>
</template>

<style lang="scss">
.enterprise-page {
    padding-bottom: 15px;
    background-color: #eaf0f9;
    min-height: calc(100vh - 400px);
    position: relative;
    .header-search-outer {
        background-image: url(../assets/images/findEnterprise/banner_enterprise.jpg);
        .el-input-group__append {
            box-shadow: none;
        }
    }
    .search-header {
        border-radius: 4px;
        background-color: #fff;
        padding: 30px 30px 15px 30px;
        box-sizing: border-box;
        margin-top: 15px;
        .selected-div {
            position: relative;
            label {
                color: #333;
                font-size: 4px;
                font-weight: bold;
                position: absolute;
                top: 4px;
            }
            .more-btn {
                position: absolute;
                right: 15px;
                font-size: 4px;
                top: 4px;
                cursor: pointer;
                transition: all 0.2s;
                color: #666;
                &:hover {
                    color: #3385ff;
                }
            }
            .labels {
                padding-left: 20px;
            }
            .el-tag {
                background-color: #409eff;
            }
        }

        .filters {
            .info-menu {
                max-height: 26px;
                overflow: hidden;
                margin-bottom: 4px;
                white-space: pre-wrap;
                &.expand {
                    max-height: 200px;
                    overflow: auto;
                    -webkit-line-clamp: 300 !important;
                }
            }
            .item {
                position: relative;
                margin-bottom: 10px;
                padding-right: 80px;
                min-height: 26px;
                &.filter-address {
                    .cities {
                        border-radius: 6px;
                        background-color: #f5f5f5;
                        padding: 10px 15px;
                        text-align: left;
                        span {
                            margin-right: 15px;
                            font-size: 4px;
                            color: #666;
                            cursor: pointer;
                        }
                    }
                }
                .salary-inputs {
                    display: inline-block;
                    .el-form-item {
                        display: inline-block;
                        margin-bottom: 0;
                        margin-top: -10px;
                    }
                    .el-input__inner {
                        padding: 0 0 0 8px;
                    }
                    .el-button.is-round {
                        margin-left: 5px;
                    }
                }
                label {
                    color: #333;
                    font-size: 12px;
                    font-weight: bold;
                    position: absolute;
                    top: 4px;
                    left: 0;
                }
                .labels {
                    display: flex;
                    flex-wrap: wrap;
                    padding-left: 50px;
                    & > span {
                        font-size: 13px;
                        color: #666666;
                        cursor: pointer;
                        transition: all 0.2s;
                        height: 26px;
                        margin-bottom: 5px;
                        line-height: 26px;
                        padding: 0 10px;
                        &.el-tag {
                            background-color: #3385ff;
                            color: #fff;
                            border: none;
                            &:hover {
                                color: #fff;
                            }
                        }
                        &:hover {
                            color: #3385ff;
                        }
                    }
                }
                .more-btn {
                    position: absolute;
                    right: 15px;
                    font-size: 4px;
                    color: #3385ff;
                    top: 4px;
                    cursor: pointer;
                    color: #666;
                    &:hover {
                        color: #3385ff;
                    }
                }
            }
        }
    }
}
</style>
