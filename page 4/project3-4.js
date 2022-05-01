(function () {
  'use strict';
  window.addEventListener('load', function() {
    var canvas = document.getElementById('canvas');

    if (!canvas || !canvas.getContext) {
      return false;
    }


    function drawGround() {
      ctx.beginPath();
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.rect(0, Y - Y * 0.1, X, Y - Y * -0.1);
      ctx.fill();
    }


    // var
    var snowNum = 80;
    var backSnowNum = 80;
    var snows = [];
    var backSnows = [];

    if (X < 768) {
      snowNum = 25;
      backSnowNum = 25;
    }

    function Snow(ctx, x, y, r, g) {
      this.ctx = ctx;
      this.init(x, y, r, g);
    }

    Snow.prototype.init = function(x, y, r, g) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.c = '255, 255, 255';
      this.v = {
        x: 0,
        y: g
      };
    };

    Snow.prototype.updatePosition = function() {
      this.y += this.v.y;
    };

    Snow.prototype.render = function() {
      this.updatePosition();
      this.wrapPosition();
      this.draw();
    };

    for (var i = 0; i < backSnowNum; i++) {
      var snow = new Snow(ctx, rand(0, X), rand(0, Y), rand(1, 5), Math.random());
      backSnows.push(snow);
    }

    for (var i = 0; i < snowNum; i++) {
      var snow = new Snow(ctx, rand(0, X), rand(0, Y), rand(10, 15), Math.random() + 0.3);
      snows.push(snow);
    }

    /********************
      Tree
    ********************/

    // var 
    var treeNum = 30;
    var trees = [];
    var backTreeNum = 16;
    var backTrees = [];
    var branchRad = 30 * Math.PI / 180;

    if (X < 768) {
      treeNum = 15;
      backTreeNum = 8;
    }

    function Tree(ctx, x, y, t, w, c) {
      this.ctx = ctx;
      this.init(x, y, t, w, c);
    }

    Tree.prototype.init = function(x, y, t, w, c) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.t = t;
      this.w = w;
      this.c = c
      this.splitNum = rand(10, 30);
      this.tSplit = this.t / this.splitNum;
      this.bSplit = this.w / this.splitNum;
    };

    Tree.prototype.draw = function() {
      ctx = this.ctx;
      ctx.lineCap = 'round';
      ctx.lineWidth = 3;
      ctx.strokeStyle = this.c;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y - this.t);
      ctx.stroke();
      ctx.lineWidth = 1;

      }
    };

    render();

    /********************
      Event
    ********************/

    // resize
    function onResize() {
      X = canvas.width = window.innerWidth;
      Y = canvas.height = window.innerHeight;
      drawMoon();
      drawGround();

    }

  });