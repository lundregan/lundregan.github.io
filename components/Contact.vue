<template>
  <section id="contact" class="contact flex flex-col justify-center h-screen">
    <div
      class="self-desc flex flex-col w-1/2 self-center text-left mt-16 text-black font-bold text-2xl p-4 m-8"
      data-augmented-ui="tl-clip-x br-clip"
    >
      <p class="self-center">Bring your Vision to Life?</p>
    </div>

    <form action="" class="form-contact flex flex-col px-32 py-16 h-1/3 mt-8">
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

      <div class="self-center text-left">
        <label for="msg" class="pl-6">Message</label><br />
        <textarea
          class="px-4 rounded mt-2 form-input"
          name="msg"
          cols="50"
          rows="4"
          placeholder="Reason for contacting..."
          data-augmented-ui="tl-clip br-clip border"
        ></textarea>
      </div>

      <div class="self-center w-full h-16 mt-4">
        <button
          class="btn-contact w-full h-16 text-black font-black py-2 px-4 rounded"
        >
          Contact Me!
        </button>
      </div>

      <p class="text-xs pt-4 text-white">Currently Under Maintenance</p>
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

.form-input
  border-bottom: 4px solid transparent

.form-input:focus
  outline: none
  border-bottom: 4px solid #fcee0a

.btn-contact
  background: #fcee0a

.btn-contact:hover
  background: darken(#fcee0a, 5%)
</style>
