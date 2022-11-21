import Vue from 'vue'

import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import PostList from "@/components/posts/PostList";
import PostPreview from "@/components/posts/PostPreview";
import AdminPostForm from "@/components/Admin/AdminPostForm";
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheHeader from '@/components/Navigation/TheHeader'
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

Vue.component('AppControlInput', AppControlInput)
Vue.component('AppButton', AppButton)
Vue.component('PostList', PostList)
Vue.component('PostPreview', PostPreview)
Vue.component('AdminPostForm', AdminPostForm)
Vue.component('TheSidenav', TheSidenav)
Vue.component('TheHeader', TheHeader)
Vue.component('TheSideNavToggle', TheSideNavToggle)
