<template>
  <div class="flex justify-center items-center h-screen w-full">
    <div class="flex justify-center">
      <form
        action="mailto:lundregan.ethan@gmail.com"
        method="POST"
        enctype="text/html"
        class="flex flex-col m-2"
      >
        <div class="self-center w-full mb-8 text-left">
          <label for="name" class="pl-6">Name</label>
          <input
            type="text"
            class="w-full rounded px-4 mt-2 p-2 form-input"
            placeholder="John Smith..."
          />
        </div>

        <div class="self-center w-full mb-8 text-left">
          <label for="" class="pl-6">E-mail</label>
          <input
            type="text"
            class="w-full px-4 rounded mt-2 p-2 form-input"
            placeholder="example@test.com..."
          />
        </div>

        <div class="self-center text-left w-full mb-8">
          <label for="msg" class="pl-6">Message</label>
          <textarea
            class="px-4 rounded mt-2 p-2 form-input w-full"
            name="msg"
            cols="50"
            rows="4"
            placeholder="Reason for contacting..."
          ></textarea>
        </div>

        <div class="self-center w-full h-16 mt-4">
          <button
            type="submit"
            class="btn-contact w-full bg-red-700 text-white py-2 px-4 text-3xl tracking-wide font-semibold"
          >
            Contact
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">
form
  max-width: 1024px
  margin: 0
label
  @apply text-red-600 font-semibold text-xl
</style>
