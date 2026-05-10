import { Envelope, Plus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUserModal = ({ createUserAction }) => {
    return (
        <Modal>
            <Button variant="secondary"><Plus></Plus> Add User</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <div className="flex items-center gap-3">
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Plus className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading className="font-bold text-xl">Add User</Modal.Heading>
                            </div>


                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createUserAction} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email">
                                        <Label>Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="role" type="tel">
                                        <Label>Role</Label>
                                        <Input placeholder="Enter user role" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit">Add</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AddUserModal;