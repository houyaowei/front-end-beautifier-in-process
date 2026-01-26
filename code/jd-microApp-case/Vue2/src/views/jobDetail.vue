<template>
  <section class="job-detail-page">
    <!-- 职位基本信息 -->
    <div class="job-base">
      <div class="w-1200-auto flex-layout relative">
        <div class="base-l">
          <h2>
            {{ jobDetail.jobTitle }}
            <span class="salary">{{
              jobDetail.salaryRange === "不限"
                ? "薪资不限"
                : jobDetail.salaryRange
            }}</span>
          </h2>
          <p class="labels">
            <span title="工作地址">
              <i class="el-icon-location"></i>
              {{ jobDetail.workProvince }}{{ jobDetail.workCity }}
            </span>
            <span title="工作经验">
              <i class="el-icon-suitcase-1"></i>
              <template v-if="jobDetail.workExperience">
                {{
                  jobDetail.workExperience === "不限"
                    ? "经验不限"
                    : jobDetail.workExperience + "工作经验"
                }}
              </template>
              <template v-else>-</template>
            </span>
            <span title="年龄要求">
              <i class="el-icon-user"></i>
              <template
                v-if="
                  jobDetail.ageMin > 0 && jobDetail.ageMin && jobDetail.ageMax
                "
              >
                {{ jobDetail.ageMin }}-{{ jobDetail.ageMax }}岁
              </template>
              <template v-else-if="jobDetail.ageMin === -1">
                年龄不限
              </template>
              <template v-else>-</template>
            </span>
          </p>
          <p class="tags">
            <el-tag
              size="small"
              v-for="(item, index) in jobDetail.welfareTags"
              :key="index"
              >{{ item }}</el-tag
            >
          </p>
          <p class="foot">
            <span>
              <i class="el-icon-time"></i>
              {{ jobDetail.refreshTime }}更新
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="detail-mess">
      <div class="detail-l">
        <div class="detail-card">
          <div class="detail-user">
            <img :src="jobDetail.hrHeadPortrait" alt />
            <div class="user-mess">
              <p>
                {{ jobDetail.hrName || "佚名" }}
                <span>{{ jobDetail.refreshTimeStr }}更新</span>
              </p>
              <p>{{ jobDetail.enterpriseName }} · {{ jobDetail.hrPost }}</p>
            </div>
          </div>
          <el-divider></el-divider>

          <h3 class="hui-title">职位描述</h3>
          <p class="cont">{{ jobDetail.jobDescription }}</p>
          <div class="tips">
            求职提醒：求职过程请勿缴纳费用，谨防诈骗！若信息不实请举报。
          </div>
        </div>

        <div class="detail-card">
          <h3 class="hui-title">该公司其他职位</h3>
          <!-- 表格 -->
          <div class="job-part">
            <!-- 左侧 -->
            <ul
              class="job-list"
              v-if="
                jobDetail.enterpriseJobList &&
                jobDetail.enterpriseJobList.length > 0
              "
            >
              <li
                v-for="(item, index) in jobDetail.enterpriseJobList"
                :key="index"
              >
                <div class="part-1">
                  <div class="left">
                    <el-button
                      class="title"
                      type="text"
                      @click="toJobDetail(item)"
                    >
                      {{ item.jobTitle }}
                      <el-tag
                        class="ml-10"
                        size="mini"
                        v-for="(a, index) in item.labels"
                        :key="index"
                        :type="
                          (a.indexOf('紧急') !== -1 && 'danger') ||
                          (a.indexOf('热门') !== -1 && 'warning')
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
                      <span class="label" v-if="item.workCity"
                        >{{ item.workProvince }} {{ item.workCity }}</span
                      >
                      <span class="label" v-if="item.workExperience">{{
                        item.workExperience === "不限"
                          ? "经历不限"
                          : item.workExperience + "年工作经验"
                      }}</span>
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
                      src="../assets/images/default_company.png"
                      :alt="item.enterpriseName"
                    />
                    <div class="comp-mess">
                      <p class="title">{{ item.enterpriseName }}</p>
                      <span class="label" v-if="item.industry">{{
                        item.industry
                      }}</span>
                      <span class="label" v-if="item.scale"
                        >{{ item.scale }}人以上</span
                      >
                    </div>
                  </div>
                </div>
                <div class="part-2">
                  <p class="labels">
                    <span
                      v-for="(itemInner, indexInner) in item.welfareTags"
                      :key="indexInner"
                    >
                      {{ itemInner }}
                      <el-divider direction="vertical"></el-divider>
                    </span>
                  </p>
                  <p class="time">{{ item.refreshTimeStr }}更新</p>
                </div>
              </li>
            </ul>
            <el-empty
              v-else
              class="margin-center"
              description="暂无职位"
            ></el-empty>
          </div>
        </div>
      </div>

      <div class="detail-r">
        <div class="card-small">
          <div class="card-header">公司基本信息</div>
          <div class="card-mess">
            <div class="logo">
              <img
                v-if="jobDetail.enterpriseLogo"
                :src="jobDetail.enterpriseLogo"
                alt
              />
              <img v-else src="../assets/images/default_company.png" alt />
              <span>{{ jobDetail.enterpriseName }}</span>
            </div>

            <p title="融资情况">
              <i class="el-icon-data-analysis"></i>
              {{ jobDetail.financing + "轮" || "-" }}
            </p>
            <p title="公司规模">
              <i class="el-icon-user-solid"></i>
              {{ jobDetail.scale + "人以上" || "-" }}
            </p>
            <p title="所属行业">
              <i class="el-icon-office-building"></i>
              {{ jobDetail.enterpriseIndustry || "-" }}
            </p>
            <el-button
              @click="toEnterpriseDetail(jobDetail)"
              round
              plain
              type="primary"
              class="margin-center-block mt-20"
              >公司主页 >></el-button
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 职位其他信息 -->
    <div class="job-cont">
      <div class="cont-l"></div>
      <div class="cont-r"></div>
    </div>
  </section>
</template>

<script>
import findJobApi from "@/api/findJobApi";

export default {
  data() {
    return {
      jobDetail: {},
    };
  },
  watch: {},
  computed: {},
  methods: {
    getJobDetail() {
      let { jobId } = this.$route.query;
      let params = {
        jobId,
      };
      console.log(params);
      findJobApi.getJobDetail(params).then((res) => {
        console.log(res);
        const { success, message, data } = res;
        if (success) {
          this.jobDetail = data;
        } else {
          this.$message.error(message);
        }
      });
    },
  },
  created() {},
  mounted() {
    this.getJobDetail();
  },
};
</script>

<style lang="less">
.job-detail-page {
  background-color: #eaf0f9;
  min-height: calc(100vh - 0px);
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
  .job-base {
    background: linear-gradient(90deg, #3b526a 0, #345a6d 100%);
    padding: 15px 0 20px 0;
    position: relative;
    .base-l {
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
        margin: 10px auto;
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
