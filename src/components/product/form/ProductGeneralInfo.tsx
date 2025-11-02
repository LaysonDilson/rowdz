import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";

export default function ProductGeneralInfo() {

    return (
        <ComponentCard title="Product General Info">
            <div className="space-y-6">
                <div>
                    <Label htmlFor="productName">Nome do produto</Label>
                    <Input type="text" id="productName" placeholder="Nome do produto" />
                </div>
                <div>
                    <Label htmlFor="mainSKU">SKU Pricipal</Label>
                    <Input type="text" id="mainSKU" placeholder="SKU principal" />
                </div>
            </div>
        </ComponentCard>
    );
}