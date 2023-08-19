<template>
  <div>
    <div class="bg-red-500 z-50 w-screen h-screen sticky bottom-0 flex justify-center items-center rounded-radiusMain">
      <h1>Top</h1>
    </div>
    <section class="sticky bottom-0 h-screen z-40">
      <div class="z-[100] bg-gray-200 fixed top-1/2 w-4 h-10 rounded-full right-4 -translate-y-1/2 cursor-pointer"></div>
      <div
        class="bg-blue-500 z-50 w-screen h-screen sticky bottom-0 flex justify-center items-center rounded-b-radiusMain">
        <h1>Section 1</h1>
      </div>
      <div
        class="bg-green-500 z-40 w-screen h-screen sticky bottom-0 flex justify-center items-center rounded-b-radiusMain">
        <h1>Section 2</h1>
      </div>
      <div
        class="bg-yellow-500 z-30 w-screen h-screen sticky bottom-0 flex justify-center items-center rounded-b-radiusMain">
        <h1>Section 3</h1>
      </div>
      <div class="bg-violet-500 z-10 w-screen h-screen sticky bottom-0 flex justify-center items-center rounded-radiusMain">
        <h1>Bottom</h1>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'testing',
  data() {
    return {};
  },
  methods: {}
}

</script>

<style scoped lang='scss'></style>