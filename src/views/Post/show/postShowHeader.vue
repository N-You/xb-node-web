<template>
  <div class="postShowHeader">
    <div class="content">
      <div class="text">{{ post?.title }}</div>
      <div class="meta">
      {{ post?.user?.name }}
    </div>
    </div>
    <div class="thumbnail">
      <userAvatar :avatarSrc="userAvatearImage" size="medium" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import userAvatar from '@/components/Menu/User/components/user-avatar.vue';
import { userAcountStore } from '@/store/userAcountStore';
import { userStore } from '@/store/userStore';
import { onMounted, ref } from 'vue';

const useUserAccountStore = userAcountStore();
const useUserStore = userStore();

const props = defineProps<{ post: any }>();

onMounted(async () => {
  await getUserInfo(props.post?.user?.id);
});

let userAvatearImage = ref<string>('');
async function getUserInfo(id: number) {
  if (!props.post?.user?.avatar) {
    userAvatearImage.value = ``;
    return;
  }

  await useUserAccountStore.setAvatarPreviewImage(
    `http://localhost:3000/users/${id}/avatar?size=large`,
  );
  userAvatearImage.value = useUserStore.avatarPreviewImage;
}
</script>

<style lang="sass" scoped>
.postShowHeader
    display: grid
    grid-template-columns: 1fr 64rem
    gap: 16rem
    margin-bottom: 48rem
    .content
        .text
            font-size: 26rem
            margin-bottom: 16rem
        .meta .link
            color: var(--secondary-text-color)
</style>
