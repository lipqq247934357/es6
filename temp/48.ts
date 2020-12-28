let a = {
    /**
     * 添加组织节点
     */
    ADD_ORG("addOrg", "添加组织"),
    /**
     * 删除组织节点
     */
    DEL_ORG("delOrg", "删除组织"),
    /**
     * 编辑组织节点
     */
    EDIT_ORG("editOrg", "编辑组织"),
    /**
     * 设置组织负责人
     */
    SET_MANAGE("setManage", "设置组织负责人"),

    /**
     * 设置虚线汇报对象
     */
    SET_FALSE_MANAGE("setFalseMange","设置虚线汇报对象"),
    /**
     * 添加成员
     */
    ADD_STAFF("addStaff","添加成员"),
    /**
     * 迁移成员
     */
    REMOVE_STAFF("removeStaff","迁移成员"),
    /**
     * 删除成员
     */
    DELETE_STAFF("deleteStaff","删除成员");
}

const haveRights = [
    'addOrg',
    'delOrg',
    'editOrg',
    'setManage',
    'setFalseMange',
    'addStaff',
    'removeStaff',
    'deleteStaff'
]