import { useEffect, useState } from 'react';
import { Result } from "antd";
import { useAppSelector } from '@/redux/hooks';
interface IProps {
    hideChildren?: boolean;
    children: React.ReactNode;
    permission: { method: string, apiPath: string, module: string };
}

const Access = (props: IProps) => {
    //set default: hideChildren = false => vẫn render children
    // hideChildren = true => ko render children, ví dụ hide button (button này check quyền)
    const { permission, hideChildren = false } = props;
    const [allow, setAllow] = useState<boolean>(true);

    const permissions = useAppSelector(state => state.account.user.permissions);
    const user = useAppSelector(state => state.account.user);

    useEffect(() => {
        // Check if user is SUPER_ADMIN - bypass permission check
        const isSuperAdmin = user?.role?.name === 'SUPER_ADMIN';
        
        if (isSuperAdmin) {
            setAllow(true);
            return;
        }

        if (permissions && permissions.length) {
            // Nới lỏng điều kiện: chỉ cần cùng module + method là được,
            // bỏ qua apiPath để tránh lệch dữ liệu giữa FE config và BE
            const check = permissions.find(item =>
                item.method === permission.method &&
                item.module === permission.module
            )
            if (check) {
                setAllow(true)
            } else {
                setAllow(false);
            }
        } else {
            setAllow(false);
        }
    }, [permissions, user?.role?.name, permission])

    return (
        <>
            {allow === true ?
                <>{props.children}</>
                :
                <>
                    {hideChildren === false ?
                        <Result
                            status="403"
                            title="Truy cập bị từ chối"
                            subTitle="Xin lỗi, bạn không có quyền hạn (permission) truy cập thông tin này"
                        />
                        :
                        <>
                            {/* render nothing */}
                        </>
                    }
                </>
            }
        </>

    )
}

export default Access;