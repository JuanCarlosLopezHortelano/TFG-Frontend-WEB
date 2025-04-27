//   steps/Step1Basics.tsx  (ejemplo)
import { Form, Input, Select, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useWizard } from "../TaskDraftContext";

export default function Step1Basics() {
  const { draft, setDraft } = useWizard();
  const nav = useNavigate();

  return (
    <Form
      layout="vertical"
      initialValues={draft}
      onFinish={(vals)=>{ setDraft({...draft, ...vals}); nav("../step-2"); }}
    >
      <Form.Item name="title" label="Título" rules={[{required:true}]}>
        <Input/>
      </Form.Item>
      <Form.Item name="category" label="Categoría">
        <Select options={["Eventos","Logística"].map(v=>({value:v,label:v}))}/>
      </Form.Item>
      <Form.Item name="rate" label="Tarifa €/h" rules={[{required:true}]}>
        <Input type="number"/>
      </Form.Item>
      <Form.Item name="duration" label="Duración" rules={[{required:true}]}>
        <Input placeholder="4 h, 1 día…"/>
      </Form.Item>
      <Button type="primary" htmlType="submit">Siguiente</Button>
    </Form>
  );
}
