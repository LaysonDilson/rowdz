import PageMeta from "../../components/common/PageMeta.tsx";
import PageBreadcrumb from "../../components/common/PageBreadCrumb.tsx";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs.tsx";
import SelectInputs from "../../components/form/form-elements/SelectInputs.tsx";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput.tsx";
import InputStates from "../../components/form/form-elements/InputStates.tsx";
import InputGroup from "../../components/form/form-elements/InputGroup.tsx";
import FileInputExample from "../../components/form/form-elements/FileInputExample.tsx";
import CheckboxComponents from "../../components/form/form-elements/CheckboxComponents.tsx";
import RadioButtons from "../../components/form/form-elements/RadioButtons.tsx";
import ToggleSwitch from "../../components/form/form-elements/ToggleSwitch.tsx";
import DropzoneComponent from "../../components/form/form-elements/DropZone.tsx";
import ProductGeneralInfo from "../../components/product/form/ProductGeneralInfo.tsx";

export default function ProductCreateForm() {
    return (
        <div>
            <PageMeta
                title="Rowdz Criar Produtos"
                description="Rowdz Criar Produtos"
            />
            <PageBreadcrumb pageTitle="Form Elements" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    <ProductGeneralInfo/>
                </div>
                <div className="space-y-6">

                </div>
            </div>
        </div>
    );
}