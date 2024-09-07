<template>
  <v-container style="max-width: 650px" class="pb-16">
    <v-row>
      <v-col>
        <h1>ERC qualification options</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          There are three ways to qualify for ERC. Please answer the questions
          in the following sections to determine your eligibility for the
          program.
        </p>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-4">
      <v-col cols="1">
        <div class="list-item-number">1</div>
      </v-col>
      <v-col class="ml-2">
        <h1 class="line-text">Revenue reduction</h1>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-4">
      <v-col cols="1">
        <div class="list-item-number">2</div>
      </v-col>
      <v-col class="ml-2">
        <h1 class="line-text">Supply disruption</h1>
      </v-col>
    </v-row>
    <v-row class="mb-n6 py-2">
      <v-col cols="1">
        <div class="list-item-number">3</div>
      </v-col>
      <v-col class="ml-2">
        <h1 class="line-text">Full or partial suspension</h1>
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
</style>
