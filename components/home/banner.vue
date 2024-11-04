<template>
    <div class="h-screen bg-white z-10 w-full -mt-14 p-4">
      <div class="carousel w-full h-full">
        <div id="slide1" class="carousel-item relative w-full">
          <div class=" w-full h-full">
            <img
              src="https://picsum.photos/1920/1080"
              alt=""
              class="w-full h-full rounded-3xl"
            />
          </div>
          <div class="absolute left-5 right-5 -bottom-3.5 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <div class=" w-full h-full">
            <img
              src="https://picsum.photos/id/96/1920/1080"
              alt=""
              class="w-full h-full rounded-3xl"
            />
          </div>
          <div class="absolute left-5 right-5 -bottom-3.5 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <div class="w-full h-full">
            <img
              src="https://picsum.photos/id/12/1920/1080"
              alt=""
              class="w-full h-full rounded-3xl"
            />
          </div>
          <div class="absolute left-5 right-5 -bottom-3.5 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <div class=" w-full h-full">
            <img
              src="https://picsum.photos/id/26/1920/1080"
              alt=""
              class="w-full h-full rounded-3xl"
            />
          </div>
          <div class="absolute left-5 right-5 -bottom-3.5 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  