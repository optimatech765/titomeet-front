/* eslint-disable @typescript-eslint/no-explicit-any */
import { useScopedI18n } from '@/locales/client';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import { Share2 } from 'lucide-react';
import React from 'react';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";


export const ShareEventComponent = ({ singleEvent, iconly = false }: { singleEvent: any, iconly?: boolean }) => {
    const eventT = useScopedI18n("event");
    return (
        <Dropdown>
            <DropdownTrigger>
                {!iconly ?
                    <Button name="Share" variant={"bordered"} size="sm" color="primary" radius="full" className="mt-2 flex-1 w-full">{eventT("share")}</Button>
                    : <Button name="Share" isIconOnly className=" bg-white rounded-full p-3 ml-2  ">
                        <Share2 className="w-6 h-6 text-red-500 text-right " />
                    </Button>}
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">

                <DropdownItem key="copy">
                    <FacebookShareButton
                        url={process.env.NEXT_PUBLIC_FRONT_URL + `/event/${singleEvent?.id}`}
                        title={"Share this event"}
                        hashtag={"tito.me"}
                    >
                        <div className="flex items-center gap-2">
                            <FacebookIcon size={20} className="text-primary" round={true} />
                            <span>Facebook</span>

                        </div>
                    </FacebookShareButton>
                </DropdownItem>
                <DropdownItem key="edit">
                    <WhatsappShareButton url={process.env.NEXT_PUBLIC_FRONT_URL + `/event/${singleEvent?.id}`} title="Share this event">
                        <div className="flex items-center gap-2">
                            <WhatsappIcon size={20} className="text-primary" round={true} />
                            <span>Whatsapp</span>
                        </div>
                    </WhatsappShareButton>
                </DropdownItem>
                <DropdownItem key="edit">
                    <TwitterShareButton url={process.env.NEXT_PUBLIC_FRONT_URL + `/event/${singleEvent?.id}`} title="Share this event">
                        <div className="flex items-center gap-2">
                            <TwitterIcon size={20} className="text-primary" round={true} />
                            <span>Twitter</span>
                        </div>

                    </TwitterShareButton>
                </DropdownItem>
                <DropdownItem key="edit">
                    <LinkedinShareButton url={process.env.NEXT_PUBLIC_FRONT_URL + `/event/${singleEvent?.id}`} title="Share this event" >
                        <div className="flex items-center gap-2">
                            <LinkedinIcon size={20} className="text-primary" round={true} />

                            <span>Linkedin</span>
                        </div>

                    </LinkedinShareButton>
                </DropdownItem>



            </DropdownMenu>
        </Dropdown>
    );
}

