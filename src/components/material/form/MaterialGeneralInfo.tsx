import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import Select from "../../form/Select.tsx";
import Button from "../../ui/button/Button.tsx";
import {useState} from "react";
import {useSubmit} from "react-router";

export default function MaterialGeneralInfo() {
    const options = [
        { value: "PLA", label: "PLA" },
        { value: "PETG", label: "PETG" },
    ];
    const [formData, setFormData] = useState({
        marca: "",
        cor: "",
        tipo: ""
    });

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({...prev, tipo: value}));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, [e.target.id]: e.target.value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/materiais', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to submit');
            }
            console.log('Successfully submitted');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <ComponentCard title="Informações Do Material" className="dark:bg-dark-900">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label htmlFor="marca">Marca</Label>
                    <Input type="text" id="marca" placeholder="Marca" value={formData.marca} onChange={handleInputChange}/>
                </div>
                <div>
                    <Label htmlFor="corMaterial">Cor do Material</Label>
                    <Input type="text" id="cor" placeholder="Preto" value={formData.cor} onChange={handleInputChange}/>
                </div>
                <div>
                    <Label>Tipo do Material</Label>
                    <Select
                        options={options}
                        placeholder="Selecione o tipo do material"
                        onChange={handleSelectChange}
                        className="dark:bg-dark-900"
                    />
                </div>
                <div className="space-y-6">
                    <Button
                        children={<div>Salvar Material</div>}
                        size="md"
                        variant="primary"
                        onClick={useSubmit}
                    />
                </div>
            </form>
       </ComponentCard>
    );
}