<template>
  <section id="contact" class="contact flex justify-center">
    <form
      action=""
      class="flex flex-col bg-gray-900 px-32 py-16 h-1/3"
      data-augmented-ui="tl-clip br-clip border"
    >
      <div class="self-center w-full mb-8">
        <label for="name">Name</label><br />
        <input
          type="text"
          class="w-full rounded px-4 mt-2 p-2"
          placeholder="John Smith..."
        />
      </div>

      <div class="self-center w-full mb-8">
        <label for="">E-mail</label><br />
        <input
          type="text"
          class="w-full px-4 rounded mt-2 p-2"
          placeholder="example@test.com..."
        />
      </div>

      <div class="self-center">
        <label for="msg">Message</label><br />
        <textarea
          class="px-4 rounded mt-2"
          name="msg"
          cols="50"
          rows="4"
          placeholder="Reason for contacting..."
        ></textarea>
      </div>

      <div class="self-center w-full h-16 mt-4">
        <button
          class="btn-contact w-full h-16 text-black font-black py-2 px-4 rounded"
        >
          Contact Me!
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass">
label
  color: white

.btn-contact
  background: #fcee0a

.btn-contact:hover
  background: darken(#fcee0a, 5%)
</style>
