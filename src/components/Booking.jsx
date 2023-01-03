import React from 'react';

const Booking = () => {
  return (
    <div class="text-2xl mt-8 p-12 w-full h-full md:w-120 md:max-w-full mx-auto">
      <div class="p-6 border border-gray-300 sm:rounded-md">
        <form method="POST" action="">
          <label class="block mb-6">
            <span class="text-gray-700">Your name</span>
            <input
              name="name"
              type="text"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Name"
              required
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700">Email address</span>
            <input
              name="email"
              type="email"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="joe@example.com"
              required
            />

            <label class="block mb-6 mt-4">
              <span class="text-gray-700">Phone number</span>
              <input
                name="name"
                type="text"
                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="+66 123 456" required
              />
            </label>


          </label>
          <label class="block mb-6">
            <span class="text-gray-700">When you want rent bike?</span>
            <input
              name="birthday"
              type="date"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          " required
            />
          </label>

          <label class="block mb-6">
            <span class="text-gray-700">How many days</span>
            <input
              name="name"
              type="text"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Days" required
            />
          </label>


          <label class="block mb-6">
            <span class="text-gray-700"
            >Chose model you would like to rent ?</span
            >
            <select
              name="present"
              class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          " required
            >
              <option>New Yamaha NMAX</option>
              <option>New Honda PCX </option>
              <option>New Yamaha XMAX</option>
              <option>New Harley Davidson</option>
            </select>
          </label>
          <div class="mb-6">
            <div class="mt-2">
              <div>
                {/* <label class="inline-flex items-center">
              <input
                name="season"
                type="radio"
                class="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                checked
              />
              {/* <span class="ml-2">With navigation</span> 
            </label> */}
              </div>
              <div>
                {/* <label class="inline-flex items-center">
              <input
                name="season"
                type="radio"
                class="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
              />
              <span class="ml-2">No Navigation</span>
            </label> */}
              </div>
            </div>
          </div>
          <div class="mb-6">
            {/* <button
          type="submit"
          class="
            h-12
            px-8
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-900
          "
        >
          Book Your Bike Now
        </button> */}

            <button className='mt-8 bg-slate-400 text-black hover:bg-black/50 hover:text-white'>Reserve Motorbike</button>
          </div>
          <div>

          </div>
        </form>
      </div>
    </div>

  )
}

export default Booking;