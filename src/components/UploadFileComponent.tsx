import { CSSProperties, Component, ChangeEvent } from "react";
import Grid from "antd/lib/card/Grid";
import { Button } from "antd";

const inputUploadFile: CSSProperties = {
    display: 'none',
};

const buttonUploadFile: CSSProperties = {
    margin: 8,
};

// component own props
interface UploadFileOwnProps { }

// component props
interface UploadFileProps extends UploadFileOwnProps { }

// component State
interface UploadFileStateProps { }

class UploadFileComponent extends Component<UploadFileProps, UploadFileStateProps>  {

    // function to read file as binary and return
    private getFileFromInput(file: File): Promise<any> {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = function () { resolve(reader.result); };
            reader.readAsBinaryString(file); // here the file can be read in different way Text, DataUrl, ArrayBuffer
        });
    }

    private manageUploadedFile(binary: String, file: File) {
        // do what you need with your file (fetch POST, ect ....)
        console.log(`The file size is ${binary.length}`);
        console.log(`The file name is ${file.name}`);
    }

    private handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        event.persist();
    }


    public render(): JSX.Element {
        return (
            <Grid >
                <Grid >
                    <input accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" style={inputUploadFile} id="file" multiple={true} type="file"/>
                    <label htmlFor="file">
                        <Button style={buttonUploadFile} onClick={e => e.stopPropagation()}>
                            Upload
                        </Button>
                    </label>
                </Grid>
            </Grid>
        );
    }
}

export default UploadFileComponent;