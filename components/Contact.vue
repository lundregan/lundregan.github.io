<template>
  <section
    id="contact"
    class="contact flex flex-col justify-center lg:h-screen w-full mt-24 lg:w-1/2"
  >
    <div
      class="self-desc flex flex-col w-1/2 self-center text-left text-black font-bold text-2xl p-4 m-8"
      data-augmented-ui="tl-clip-x br-clip"
    >
      <p class="self-center">Bring your Vision to Life?</p>
    </div>

    <form
      action="mailto:lundregan.ethan@gmail.com"
      method="POST"
      enctype="text/html"
      class="form-contact flex flex-col px-2 md:px-32 py-16 h-1/3 mt-8"
    >
      <div class="self-center w-full mb-8 text-left">
        <label for="name" class="pl-6">Name</label><br />
        <input
          type="text"
          class="w-full rounded px-4 mt-2 p-2 form-input"
          placeholder="John Smith..."
          data-augmented-ui="tl-clip br-clip border"
        />
      </div>

      <div class="self-center w-full mb-8 text-left">
        <label for="" class="pl-6">E-mail</label><br />
        <input
          type="text"
          class="w-full px-4 rounded mt-2 p-2 form-input"
          placeholder="example@test.com..."
          data-augmented-ui="tl-clip br-clip border"
        />
      </div>

      <div class="self-center text-left w-full mb-8">
        <label for="msg" class="pl-6">Message</label><br />
        <textarea
          class="px-4 rounded mt-2 p-2 form-input w-full"
          name="msg"
          cols="50"
          rows="4"
          placeholder="Reason for contacting..."
          data-augmented-ui="tl-clip br-clip border"
        ></textarea>
      </div>

      <div class="self-center w-full h-16 mt-4">
        <button
          type="submit"
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
form
  background: none

label
  color: yellow

textarea
  min-height: 40px
  max-width:100%

.form-input:focus
  outline: none

.btn-contact
  background: #fcee0a
  position: relative
  z-index: 1

.btn-contact:hover
  background: darken(#fcee0a, 5%)
</style>
