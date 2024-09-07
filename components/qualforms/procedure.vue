<template>
  <v-container style="max-width: 650px">
    <v-row class="mb-n6">
      <h2 class="py-6">How it works</h2>
    </v-row>
    <v-row class="mb-n6">
      <p>
        The Employee Retention Credit (ERC) is a stimulus program created by the
        CARES Act that offers employers a significant refundable tax credit for
        retaining employees during the pandemic. The following questions will
        determine if your business qualifies.
      </p>
    </v-row>
    <v-row class="mb-n6 py-4">
      <v-col cols="1">
        <div class="list-item-number">1</div>
      </v-col>
      <v-col class="ml-2">
        <p class="line-text">Answer the questions in the qualifying survey</p>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-4">
      <v-col cols="1">
        <div class="list-item-number">2</div>
      </v-col>
      <v-col class="ml-2">
        <p class="line-text">We'll let you know if you qualify</p>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-2">
      <v-col cols="1">
        <div class="list-item-number">3</div>
      </v-col>
      <v-col class="ml-2">
        <p class="line-text">If you do, Submit a completed form</p>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-4">
      <v-col cols="1">
        <div class="list-item-number">4</div>
      </v-col>
      <v-col class="ml-2">
        <p class="line-text">An ERC guru will get in touch</p>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-6">
      <h2>Please have the following information ready</h2>
    </v-row>
    <v-row class="mb-n6 py-4 d-flex align-center">
      <v-col cols="1">
        <img src="../../static/images/check.svg" />
      </v-col>
      <v-col class="ml-4">
        <div>
          <h3>Average number of full-time employees for 2019</h3>
          <p>This is someone that works 30+ hrs per week</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-4 pl-0">
      <v-col cols="1">
        <img src="../../static/images/check.svg" />
      </v-col>
      <v-col class="ml-4">
        <div>
          <h3>Gross receipts for each quarter of 2019, 2020 & 2021</h3>
          <p>Total deposits/sales not including PPP funds</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-4">
      <v-col cols="1">
        <img src="../../static/images/check.svg" />
      </v-col>
      <v-col class="ml-4">
        <div>
          <h3>Info on how government shutdowns impacted your business</h3>
          <p>
            An example would be if your vendors experienced shutdowns and you
            couldn't obtain critical goods
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.list-item-number {
  background-color: #388e3c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  font-size: 1.25rem;
}
.line-text {
  font-weight: 500;
}
</style>
