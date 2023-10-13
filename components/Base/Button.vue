<script setup>
defineProps({
  text: {
    type: String,
    default: 'text'
  },
  color: {
    type: String,
    default: 'primary'
  },
  outline: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="btn" :class="{ [`btn-${color}`]: color !== 'primary', 'btn-outline': outline }">{{ text }}</button>
</template>

<style lang="scss">
.btn {
  padding: 6px 12px;
  background-color: #0d6efd;
  border-radius: 4px;
  color: white;
  box-shadow: 0;
  transition: .3s ease;
  transition-property: background-color, box-shadow;
  
  &:hover {
    background-color: darken(#0d6efd, 10%);
  }

  &:active {
    background-color: darken(#0d6efd, 15%);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(#0d6efd, .5);
  }

  &.btn-outline {
    color: black;
    background-color: #fff;
    border: 1px solid #0d6efd;

    &:hover {
      background-color: #0d6efd;
      color: white;
    }
    
    &:active {
      background-color: darken(#0d6efd, 15%);
      color: white;
    }
  }
}

.btn-green {
  background-color: #39B100;
  
  &:hover {
    background-color: darken(#39B100, 10%);
  }

  &:active {
    background-color: darken(#39B100, 15%);
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(#39B100, .5);
  }

  &.btn-outline {
    background-color: #fff;
    border: 1px solid #39B100;

    &:hover {
      background-color: #39B100;
      color: white;
    }
    
    &:active {
      background-color: darken(#39B100, 15%);
      color: white;
    }
  }
}

.btn-red {
  background-color: #ef4036;

  &:hover {
    background-color: darken(#ef4036, 10%);
  }

  &:active {
    background-color: darken(#ef4036, 15%);
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(#ef4036, .5);
  }

  &.btn-outline {
    background-color: #fff;
    border: 1px solid #ef4036;

    &:hover {
      background-color: #ef4036;
      color: white;
    }
    
    &:active {
      background-color: darken(#ef4036, 15%);
      color: white;
    }
  }
}

.btn-success {
  background-color: #198754;

  &:hover {
    background-color: darken(#198754, 10%);
  }

  &:active {
    background-color: darken(#198754, 15%);
  }
  
  &:focus {
    box-shadow: 0 0 0 4px rgba(#198754, .5);
  }

  &.btn-outline {
    background-color: #fff;
    border: 1px solid #198754;

    &:hover {
      background-color: #198754;
      color: white;
    }
    
    &:active {
      background-color: darken(#198754, 15%);
      color: white;
    }
  }
}

.btn-danger {
  background-color: #dc3545;

  &:hover {
    background-color: darken(#dc3545, 10%);
  }

  &:active {
    background-color: darken(#dc3545, 15%);
  }
  
  &:focus {
    box-shadow: 0 0 0 4px rgba(#dc3545, .5);
  }

  &.btn-outline {
    background-color: #fff;
    border: 1px solid #dc3545;

    &:hover {
      background-color: #dc3545;
      color: white;
    }
    
    &:active {
      background-color: darken(#dc3545, 15%);
      color: white;
    }
  }
}

.btn-warning {
  background-color: #ffc107;
  color: black;

  &:hover {
    background-color: darken(#ffc107, 10%);
  }

  &:active {
    background-color: darken(#ffc107, 15%);
  }
  
  &:focus {
    box-shadow: 0 0 0 4px rgba(#ffc107, .5);
  }

  &.btn-outline {
    background-color: #fff;
    border: 1px solid #ffc107;

    &:hover {
      background-color: #ffc107;
      color: black;
    }
    
    &:active {
      background-color: darken(#ffc107, 15%);
      color: black;
    }
  }
}

.btn-info {
  background-color: #0dcaf0;
  color: black;

  &:hover {
    background-color: darken(#0dcaf0, 10%);
  }

  &:active {
    background-color: darken(#0dcaf0, 15%);
  }
  
  &:focus {
    box-shadow: 0 0 0 4px rgba(#0dcaf0, .5);
  }

  &.btn-outline {
    background-color: #fff;
    border: 1px solid #0dcaf0;

    &:hover {
      background-color: #0dcaf0;
      color: black;
    }
    
    &:active {
      background-color: darken(#0dcaf0, 15%);
      color: black;
    }
  }
}

.btn-light {
  background-color: #f8f9fa;
  color: black;

  &:hover {
    background-color: darken(#f8f9fa, 10%);
  }

  &:active {
    background-color: darken(#f8f9fa, 15%);
  }
  
  &:focus {
    box-shadow: 0 0 0 4px rgba(#d3d4d5, .5);
  }

  &.btn-outline {
    background-color: #fff;
    border: 1px solid #d3d4d5;

    &:hover {
      background-color: #d3d4d5;
      color: black;
    }
    
    &:active {
      background-color: darken(#f8f9fa, 15%);
      color: black;
    }
  }
}

.btn-dark {
  background-color: #212529;

  &:hover {
    background-color: darken(#212529, 10%);
  }

  &:active {
    background-color: darken(#212529, 15%);
  }
  
  &:focus {
    box-shadow: 0 0 0 4px rgba(#424649, .5);
  }

  &.btn-outline {
    background-color: #fff;
    border: 1px solid #424649;

    &:hover {
      background-color: #212529;
      color: white;
    }
    
    &:active {
      background-color: darken(#212529, 15%);
      color: white;
    }
  }
}
</style>