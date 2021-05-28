import React, { memo, useEffect, useState } from "react";
import Modal from "../components/parts/Modal";

export default memo(function ModalTest(props: any) {
  const [visible, update] = useState(false);
  useEffect(() => {
    console.log("effect");
    update(true);
  }, [visible]);
  return (
    <Modal visible={visible}>
      <div>its modal!</div>
    </Modal>
  );
});
