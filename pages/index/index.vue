<template>
	<view class="index_wrap">
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper 
				class="carousel" 
				circular 
				autoplay="true"
				interval="5000"
				@change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.src" />
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图背景颜色
				titleNViewBackground: '',
				// 轮播图片数据
				carouselList: [],
				// 轮播图当前序列号
				swiperCurrent: 0
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			// 加载轮播图数据
			async loadData() {
				let carouselList = await this.$util.json('carouselList');
				console.log(carouselList)
				this.titleNViewBackground = carouselList[0].background;
				this.carouselList = carouselList;
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			// 跳转广告位页面
			navToDetailPage() {
				var self = this;
				console.log('000')
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #f6f6f6;
	}

	.index_wrap {

		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		.carousel-section {
			position: relative;
			padding-top: 10px;

			.titleNview-placing {
				height: var(--status-bar-height);
				padding-top: 44px;
				box-sizing: content-box;
			}

			.titleNview-background {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 426upx;
				transition: .4s;
			}

			.carousel {
				width: 100%;
				height: 350upx;

				.carousel-item {
					width: 100%;
					height: 100%;
					padding: 0 28upx;
					overflow: hidden;
				}

				image {
					width: 100%;
					height: 100%;
					border-radius: 10upx;
				}
			}
		}
	}
</style>
