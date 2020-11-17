import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Input,
  InputNumber,
  Upload,
  message,
} from "antd";
import {
  SaveOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt1M = file.size / 1024 / 1024 < 1;
  if (!isLt1M) {
    message.error("يجب ان يكون حجم الصورة اقل من ١ ميكابايت !");
  }
  return isJpgOrPng && isLt1M;
}

export function AddModal({ onSubmit, onCancel, loading, visible }) {
  const [imgLoading, setImgLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setImgLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImgLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };
  const InputFiled = (label, input) => (
    <div style={{ marginBottom: 10 }}>
      <p style={{ fontWeight: "bold", marginBottom: 6 }}>{label}</p>
      {input}
    </div>
  );
  return (
    <Modal
      title="اضافة عنصر جديد"
      visible={visible}
      onCancel={() => {
        onCancel();
        setImageUrl("");
      }}
      style={{width: 420}}
      centered
      destroyOnClose
      footer={false}
    >
      <Row gutter={[20, 20]} style={{marginBottom: -10}}>
        <Col span={17}>
          {InputFiled("اسم العنصر", <Input placeholder="شاورما دجاج وسط" />)}
        </Col>
        <Col span={7}>
          {InputFiled(
            "السعر",
            <InputNumber
              style={{ width: "100%" }}
              defaultValue={1000}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              placeholder="3,000"
            />
          )}
        </Col>
        <Col span={24}>
          <Upload
            style={{ width: "100%" }}
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <div>
                {imgLoading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>اضغط لرفع صورة</div>
              </div>
            )}
          </Upload>
        </Col>
        <Col span={24}>
        <Button
          key="submit"
          size="large"
          type="primary"
          loading={loading}
          onClick={onSubmit}
          icon={<SaveOutlined />}
          block
        >
          حفظ
        </Button>
        </Col>
      </Row>
    </Modal>
  );
}
