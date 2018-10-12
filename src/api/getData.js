import fetch from '@/config/fetch'

/**
 * 登陆
 */

export const login = data => fetch('/api/admin/login', data, 'POST');

/**
 * 退出
 */

export const signout = () => fetch('/api/admin/logout');

//导入exsl
export const postExcel = data => fetch('/api/anchorRank/import', data, 'POST');
//标签列表
export const getLabelList = data => fetch('/api/label/list', data);
//分类列表
export const getCategoryList = data => fetch('/api/category/list', data);
//新建标签
export const addLabel = data => fetch('/api/label/add', data,"POST");
//修改标签
export const upDateLabel = data => fetch('/api/label/update', data,"POST");
//删除标签
export const deleteLabel = data => fetch('/api/label/delete', data,"DELETE");
//搜索标签
export const searchLabel = data => fetch('/api/label/search', data);
//搜索类别
export const searchCategory = data => fetch('/api/category/search', data);
//新增类别
export const addCategory = data => fetch('/api/category/add', data,'POST');
//修改类别
export const updateCategory = data => fetch('/api/category/update', data,'POST');
//删除类别
export const delCategory = data => fetch('/api/category/delete', data,'DELETE');
//获取视频列表
export const getVideoList = data => fetch('/api/video/list', data);
//主播名字模糊查询
export const roomSearch = data => fetch('/api/room/search', data);
//新建视频
export const videoAdd = data => fetch('/api/video/add', data,'POST');
//删除视频
export const deleteVideo= data => fetch('/api/video/delete', data,'DELETE');
//搜索视频
export const searchVideo= data => fetch('/api/video/search', data);

//新增文章
export const addArticle = data => fetch('/api/article/add', data,'POST');
//获取文章列表
export const getArticleList = data => fetch('/api/article/list', data);
//删除文章
export const deleteArticle = data => fetch('/api/article/delete', data,"DELETE");
//搜索文章
export const articleSearch = data => fetch('/api/article/search', data);
//获取文章详情
export const getArticleData = data => fetch('/api/article/detail', data);
//更新文章
export const upDateArticle = data => fetch('/api/article/update', data,'POST');
//获取视频详情
export const getArticleDetail = data => fetch('/api/video/detail', data);


//更新视频

export const upDateVideo = data => fetch('/api/video/update', data,'POST');

//根据直播地址搜索主播
export const searchAnchor = data => fetch('/api/room/searchAnchor', data);

