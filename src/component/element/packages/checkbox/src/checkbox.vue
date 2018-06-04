<template>
  <label
    class="el-checkbox"
    :class="[
      border && checkboxSize ? 'el-checkbox--' + checkboxSize : '',
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-checked': isChecked }
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed': isChecked"
    :aria-disabled="isDisabled"
    :id="id"
  >
    <span class="el-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
       aria-checked="mixed"
    >
      <span class="el-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        class="el-checkbox__original"
        type="checkbox"
        aria-hidden="true"
        :name="name"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
      <input
        v-else
        class="el-checkbox__original"
        type="checkbox"
        aria-hidden="true"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElCheckbox',

    mixins: [Emitter],

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    componentName: 'ElCheckbox',

    data() {
      return {
        selfModel: false,
        focus: false,
        isLimitExceeded: false
      };
    },

    computed: {
      model: {
        get() {
          return this.isGroup
            ? this.store : this.value !== undefined
              ? this.value : this.selfModel;
        },

        set(val) {
          if (this.isGroup) {
            this.isLimitExceeded = false;
            (this._checkboxGroup.min !== undefined &&
              val.length < this._checkboxGroup.min &&
              (this.isLimitExceeded = true));

            (this._checkboxGroup.max !== undefined &&
              val.length > this._checkboxGroup.max &&
              (this.isLimitExceeded = true));

            this.isLimitExceeded === false &&
            this.dispatch('ElCheckboxGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
            this.selfModel = val;
          }
        }
      },

      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel;
        }
      },

      isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElCheckboxGroup') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      },

      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },

      isDisabled() {
        return this.isGroup
          ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled
          : this.disabled || (this.elForm || {}).disabled;
      },

      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },

      checkboxSize() {
        const temCheckboxSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        return this.isGroup
          ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize
          : temCheckboxSize;
      }
    },

    props: {
      value: {},
      label: {},
      indeterminate: Boolean,
      disabled: Boolean,
      checked: Boolean,
      name: String,
      trueLabel: [String, Number],
      falseLabel: [String, Number],
      id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      border: Boolean,
      size: String
    },

    methods: {
      addToStore() {
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
        ) {
          this.model.push(this.label);
        } else {
          this.model = this.trueLabel || true;
        }
      },
      handleChange(ev) {
        if (this.isLimitExceeded) return;
        let value;
        if (ev.target.checked) {
          value = this.trueLabel === undefined ? true : this.trueLabel;
        } else {
          value = this.falseLabel === undefined ? false : this.falseLabel;
        }
        this.$emit('change', value, ev);
        this.$nextTick(() => {
          if (this.isGroup) {
            this.dispatch('ElCheckboxGroup', 'change', [this._checkboxGroup.value]);
          }
        });
      }
    },

    created() {
      this.checked && this.addToStore();
    },
    mounted() { // 为indeterminate元素 添加aria-controls 属性
      if (this.indeterminate) {
        this.$el.setAttribute('aria-controls', this.controls);
      }
    },

    watch: {
      value(value) {
        this.dispatch('ElFormItem', 'el.form.change', value);
      }
    }
  };
</script>
<style scoped>
    @charset "UTF-8";
    .el-checkbox, .el-checkbox__input {
        white-space: nowrap;
        cursor: pointer;
        display: inline-block;
        position: relative
    }

    .el-checkbox {
        color: #1f2d3d;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none
    }

    .el-checkbox + .el-checkbox {
        margin-left: 15px
    }

    .el-checkbox__input {
        outline: 0;
        line-height: 1;
        vertical-align: middle
    }

    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #20a0ff;
        border-color: #0190fe
    }

    .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
        content: '';
        position: absolute;
        display: block;
        border: 1px solid #fff;
        margin-top: -1px;
        left: 3px;
        right: 3px;
        top: 50%
    }

    .el-checkbox__input.is-indeterminate .el-checkbox__inner::after {
        display: none
    }

    .el-checkbox__input.is-focus .el-checkbox__inner {
        border-color: #20a0ff
    }

    .el-checkbox__input.is-checked .el-checkbox__inner {
        background-color: #20a0ff;
        border-color: #0190fe
    }

    .el-checkbox__input.is-checked .el-checkbox__inner::after {
        -ms-transform: rotate(45deg) scaleY(1);
        transform: rotate(45deg) scaleY(1)
    }

    .el-checkbox__input.is-disabled .el-checkbox__inner {
        background-color: #eef1f6;
        border-color: #d1dbe5;
        cursor: not-allowed
    }

    .el-checkbox__input.is-disabled .el-checkbox__inner::after {
        cursor: not-allowed;
        border-color: #eef1f6
    }

    .el-checkbox__input.is-disabled .el-checkbox__inner + .el-checkbox__label {
        cursor: not-allowed
    }

    .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
        background-color: #d1dbe5;
        border-color: #d1dbe5
    }

    .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
        border-color: #fff
    }

    .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner {
        background-color: #d1dbe5;
        border-color: #d1dbe5
    }

    .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner::before {
        border-color: #fff
    }

    .el-checkbox__input.is-disabled + .el-checkbox__label {
        color: #bbb;
        cursor: not-allowed
    }

    .el-checkbox__inner {
        display: inline-block;
        position: relative;
        border: 1px solid #bfcbd9;
        border-radius: 4px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46)
    }

    .el-checkbox__inner:hover {
        border-color: #20a0ff
    }

    .el-checkbox__inner::after {
        box-sizing: content-box;
        content: "";
        border: 2px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 6px;
        left: 4px;
        position: absolute;
        top: 2px;
        -ms-transform: rotate(45deg) scaleY(0);
        transform: rotate(45deg) scaleY(0);
        width: 4px;
        transition: transform .15s cubic-bezier(.71, -.46, .88, .6) .05s;
        -ms-transform-origin: center;
        transform-origin: center
    }

    .el-checkbox__original {
        opacity: 0;
        outline: 0;
        position: absolute;
        margin: 0;
        left: -999px
    }

    .el-checkbox__label {
        font-size: 14px;
        padding-left: 5px
    }
</style>
