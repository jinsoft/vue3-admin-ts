import { ElMessage } from "element-plus";

const message = {
  info(msg: string) {
    ElMessage(msg);
  },
  success(msg: string) {
    ElMessage.success({
      message: msg,
      type: "success",
    });
  },
  warning(msg: string) {
    ElMessage.warning({
      message: msg,
      type: "warning",
    });
  },
  error(msg: string) {
    ElMessage.error(msg);
  },
};

export default message;
