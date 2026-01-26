<script setup>
import { reactive, onMounted, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import findEnterpriseApi from "@/api/findEnterpriseApi";
const { proxy } = getCurrentInstance();
const route = useRoute();
const enterpriseData = reactive({
    enterpriseJobList: [],
    enterpriseDetail: {},
});

onMounted(() => {
    getEnterpriseDetail();
});

function getEnterpriseDetail() {
    let { enterpriseId } = route.query;
    let params = {
        enterpriseId,
    };
    console.log(params);
    findEnterpriseApi.getEnterpriseDetail(params).then((res) => {
        console.log(res);
        const { success, message, data } = res;
        if (success) {
            let { enterpriseJobList } = data;
            enterpriseData.enterpriseJobList = enterpriseJobList;
            enterpriseData.enterpriseDetail = data;
        } else {
            proxy.$message.error(message);
        }
    });
}
</script>

<template>
    <section class="enterprise-detail-page">
        <div class="enterprise-base">
            <div class="w-1200-auto relative">
                <div class="mess">
                    <img
                        :src="enterpriseData.enterpriseDetail.enterpriseLogo"
                        :alt="enterpriseData.enterpriseDetail.enterpriseName"
                    />
                    <div>
                        <h2>
                            {{ enterpriseData.enterpriseDetail.enterpriseName }}
                        </h2>
                        <p class="labels">
                            <span title="企业规模">
                                <i class="el-icon-medal"></i>
                                {{
                                    enterpriseData.enterpriseDetail.scale +
                                    "人以上"
                                }}
                            </span>
                            <span title="所在行业">
                                <i class="el-icon-office-building"></i>
                                {{
                                    enterpriseData.enterpriseDetail
                                        .enterpriseIndustry || "-"
                                }}
                            </span>
                        </p>
                        <p class="tags">
                            <el-tag
                                size="small"
                                v-for="(item, index) in enterpriseData
                                    .enterpriseDetail.welfareTagList"
                                :key="index"
                                >{{ item }}</el-tag
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="detail-mess">
            <div class="detail-l">
                <div class="detail-card">
                    <h3 class="hui-title">公司简介</h3>
                    <p class="cont">
                        {{
                            enterpriseData.enterpriseDetail
                                .enterpriseIntroduction
                        }}
                    </p>
                </div>

                <div class="detail-card">
                    <h3 class="hui-title">公司地址</h3>
                    <p class="mt-15 f-14">
                        <i class="el-icon-location-information f-16"></i>
                        {{ enterpriseData.enterpriseDetail.address }}
                    </p>
                </div>

                <div class="detail-card">
                    <h3 class="hui-title">该公司招聘职位</h3>
                    <!-- 表格 -->
                    <div class="job-part">
                        <ul
                            class="job-list"
                            v-if="enterpriseData.enterpriseJobList.length > 0"
                        >
                            <li
                                v-for="(
                                    item, index
                                ) in enterpriseData.enterpriseJobList"
                                :key="index"
                            >
                                <div class="part-1">
                                    <div class="left">
                                        <el-button class="title" type="text">
                                            {{ item.jobTitle }}
                                            <el-tag
                                                class="ml-10"
                                                size="mini"
                                                v-for="(
                                                    a, index
                                                ) in item.labels"
                                                :key="index"
                                                :type="
                                                    (a.indexOf('紧急') !== -1 &&
                                                        'danger') ||
                                                    (a.indexOf('热门') !== -1 &&
                                                        'warning')
                                                "
                                                >{{ a }}</el-tag
                                            >
                                        </el-button>
                                        <p>
                                            <span class="salary">{{
                                                item.salaryRange === "不限"
                                                    ? "薪资不限"
                                                    : item.salaryRange
                                            }}</span>
                                            <span
                                                class="label"
                                                v-if="item.workCity"
                                                >{{ item.workProvince }}
                                                {{ item.workCity }}</span
                                            >
                                            <span
                                                class="label"
                                                v-if="item.workExperience"
                                                >{{
                                                    item.workExperience ===
                                                    "不限"
                                                        ? "经历不限"
                                                        : item.workExperience +
                                                          "年工作经验"
                                                }}</span
                                            >
                                        </p>
                                    </div>
                                    <div class="mid">
                                        <img
                                            v-if="item.enterpriseLogo"
                                            :src="item.enterpriseLogo"
                                            :alt="item.enterpriseName"
                                        />
                                        <img
                                            v-else
                                            src="../assets/images/findEnterprise/default_company.png"
                                            :alt="item.enterpriseName"
                                        />
                                        <div class="comp-mess">
                                            <p class="title">
                                                {{ item.enterpriseName }}
                                            </p>
                                            <span
                                                class="label"
                                                v-if="item.industry"
                                                >{{ item.industry }}</span
                                            >
                                            <span
                                                class="label"
                                                v-if="item.scale"
                                                >{{ item.scale }}人以上</span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="part-2">
                                    <p class="labels">
                                        <span
                                            v-for="(
                                                itemInner, indexInner
                                            ) in item.welfareTags"
                                            :key="indexInner"
                                        >
                                            {{ itemInner }}
                                            <el-divider
                                                direction="vertical"
                                            ></el-divider>
                                        </span>
                                    </p>
                                    <p class="time">
                                        {{ item.refreshTimeStr }}
                                    </p>
                                </div>
                            </li>
                            <template v-if="total > 0">
                                <el-button
                                    v-if="
                                        enterpriseData.enterpriseJobList
                                            .length < total
                                    "
                                    class="w-350-auto"
                                    type="primary"
                                    @click="moreJob"
                                    plain
                                    :loading="loadingBtn"
                                    >查看更多</el-button
                                >
                                <el-button
                                    v-else-if="
                                        enterpriseData.enterpriseJobList
                                            .length === total && total > 10
                                    "
                                    class="w-350-auto is-disabled"
                                    type="primary"
                                    disabled
                                    plain
                                    >已加载全部</el-button
                                >
                            </template>
                        </ul>
                        <el-empty
                            v-else
                            class="margin-center"
                            description="暂无职位"
                        ></el-empty>
                    </div>
                </div>
            </div>
            <!-- 右侧 -->
            <div class="detail-r">
                <div class="card-small">
                    <div class="card-header">办公环境</div>
                    <div class="card-mess">
                        <div
                            class="imgs-wall"
                            v-if="
                                enterpriseData.enterpriseDetail.photos &&
                                enterpriseData.enterpriseDetail.photos.length >
                                    0
                            "
                        >
                            <img
                                @click="preview(item)"
                                v-for="(item, index) in enterpriseData
                                    .enterpriseDetail.photos"
                                :key="index"
                                :src="item"
                                :alt="
                                    enterpriseData.enterpriseDetail
                                        .enterpriseName
                                "
                            />
                        </div>
                        <el-empty
                            v-else
                            class="margin-center"
                            description="暂无公司图片"
                        ></el-empty>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.enterprise-detail-page {
    padding-bottom: 20px;
    background-color: #eaf0f9;
    min-height: calc(100vh - 400px);
    .map {
        width: 820px;
        height: 450px;
        margin-top: 25px;
        border-radius: 4px;
        background-color: #d8d8d8ff;
        overflow: hidden;
    }
    .imgs-wall {
        img {
            width: 240px;
            height: 140px;
            border-radius: 4px;
            margin: 8px 5px;
            object-fit: cover;
        }
    }
    .job-part {
        width: 820px;
        .job-list li {
            border: 1px solid #f5f5f5;
            .mid {
                width: 300px;

                display: flex;
                img {
                    width: 54px;
                    height: 54px;
                    border-radius: 4px;
                    margin-right: 10px;
                }
            }
        }
    }
    .enterprise-base {
        background: linear-gradient(90deg, #3b526a 0, #345a6d 100%);
        padding: 15px 0 12px 0;
        position: relative;
        .mess {
            display: flex;
            img {
                width: 100px;
                height: 100px;
                border-radius: 4px;
                margin-right: 15px;
            }
            h2 {
                font-size: 28px;
                font-weight: 600;
                color: #fff;
                .salary {
                    font-size: 34px;
                    font-weight: normal;
                    color: #f26d49;
                    margin-left: 20px;
                }
            }
            .labels {
                margin: 10px auto 8px auto;
                color: #fff;
                span {
                    margin-right: 15px;
                }
            }
        }
        .base-r {
            button {
                width: 120px;
                font-size: 16px;
                &.is-plain {
                    color: #409eff;
                    background: transparent;
                    border-color: #409eff;
                }
            }
            .fix-r {
                position: absolute;
                top: 10px;
                right: 0;
                color: #fff;
                span {
                    margin-left: 25px;
                }
            }
        }
        .tags {
            margin-right: 15px;
            border-radius: 4px;
            transition: all 0.2s;
            cursor: pointer;
            .el-tag {
                margin-right: 15px;
                background-color: rgba(255, 255, 255, 0.1);
                border-radius: 6px;
                color: #fff;
                border: none;
                font-size: 12px;
            }
        }
        .foot {
            margin-top: 20px;
            span {
                color: #fff;
                margin-right: 40px;
                font-size: 12px;
            }
        }
    }
}
</style>
