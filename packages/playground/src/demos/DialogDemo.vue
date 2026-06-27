<template>
  <div class="demo-page">
    <h1 class="demo-title">Dialog 对话框</h1>
    <p class="demo-desc">模态对话框组件，用于需要用户确认或输入信息的场景。</p>

    <section class="demo-section">
      <h2 class="demo-section__title">基础对话框</h2>
      <div class="demo-row">
        <AkButton variant="primary" @click="showDialog1 = true">打开对话框</AkButton>
        <AkDialog
          v-model:visible="showDialog1"
          title="OPERATOR DEPLOYMENT"
        >
          <p>确认部署该干员？此操作不可撤销。</p>
          <template #footer>
            <AkButton @click="showDialog1 = false">取消</AkButton>
            <AkButton variant="primary" @click="showDialog1 = false">确认部署</AkButton>
          </template>
        </AkDialog>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">自定义宽度</h2>
      <div class="demo-row">
        <AkButton variant="danger" @click="showDialog2 = true">宽对话框 (720px)</AkButton>
        <AkDialog
          v-model:visible="showDialog2"
          title="RHODES ISLAND BULLETIN"
          width="720px"
        >
          <p>罗德岛公开通报。近期的部署行动已取得阶段性进展。
          所有参与干员表现优异，值得嘉奖。指挥部将根据此次行动的结果，
          调整下一步的战略部署方向。</p>
          <template #footer>
            <AkButton @click="showDialog2 = false">已知悉</AkButton>
          </template>
        </AkDialog>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">点击遮罩关闭</h2>
      <div class="demo-row">
        <AkButton @click="showDialog3 = true">点击遮罩关闭</AkButton>
        <AkDialog
          v-model:visible="showDialog3"
          title="INTEL BRIEFING"
          :close-on-overlay="true"
        >
          <p>情报简报：源石虫的活跃区域在近期有所扩大，建议加强相关区域的监控。</p>
          <template #footer>
            <AkButton variant="primary" @click="showDialog3 = false">收到</AkButton>
          </template>
        </AkDialog>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showDialog1 = ref(false)
const showDialog2 = ref(false)
const showDialog3 = ref(false)
</script>

<style scoped>
.demo-page { max-width: 900px; }
.demo-title {
  font-family: 'Rajdhani', sans-serif;
  font-size: 28px; font-weight: 700;
  color: var(--ak-primary-light); letter-spacing: 2px;
  text-transform: uppercase; margin-bottom: var(--ak-spacing-sm);
}
.demo-desc { color: var(--ak-text-secondary); margin-bottom: var(--ak-spacing-xxl); line-height: 1.6; }
.demo-section { margin-bottom: var(--ak-spacing-xxl); }
.demo-section__title {
  font-size: 14px; font-weight: 600; color: var(--ak-text-regular);
  text-transform: uppercase; letter-spacing: 1px;
  margin-bottom: var(--ak-spacing-lg); padding-bottom: var(--ak-spacing-sm);
  border-bottom: 1px solid var(--ak-border-color);
}
.demo-row { display: flex; flex-wrap: wrap; gap: var(--ak-spacing-md); align-items: center; }
</style>
