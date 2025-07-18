import { useEffect } from "react";
import Topbar from "../components/Topbar";
import ScrollArea from "../components/Scrollarea";
import { useChatStore } from "../stores/useChatStore";
import UsersList from "../components/UsersList";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";
import { Avatar, AvatarImage } from "../components/Avatar";
import Cookie from 'js-cookie';

const formatTime = (date: string) => {
	return new Date(date).toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
};

const ChatPage = () => {
	const user = Cookie.get('user')
	const { messages, selectedUser, fetchUsers, fetchMessages } = useChatStore();

	useEffect(() => {
		if (user) fetchUsers();
	}, [fetchUsers, user]);

	useEffect(() => {
		if (selectedUser) fetchMessages(selectedUser.id);
	}, [selectedUser, fetchMessages]);

	console.log({ messages });

	return (
		<main className="h-full rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden">
			<Topbar />

			<div className="grid lg:grid-cols-[300px_1fr] grid-cols-[80px_1fr] h-[calc(100vh-180px)]">
				<UsersList />

				{/* Chat Message Section */}
				<div className="flex flex-col h-full">
					{selectedUser ? (
						<>
							<ChatHeader />

							{/* Messages */}
							<ScrollArea className="h-[calc(100vh-340px)]">
								<div className="p-4 space-y-4">
									{messages.map((message) => (
										<div
											key={message._id}
											className={`flex items-start gap-3 ${
												message.senderId === user?.id ? "flex-row-reverse" : ""
											}`}
										>
											{/* Avatar */}
											<Avatar className='size-8'>
												<AvatarImage
													src={
														message.senderId === user?.id
															? user.imageUrl
															: selectedUser.imageUrl
													}
												/>
											</Avatar>

											{/* Message Bubble */}
											<div
												className={`rounded-lg p-3 max-w-[70%] text-white
													${message.senderId === user?.id ? "bg-green-500" : "bg-zinc-800"}
												`}
											>
												<p className="text-sm">{message.content}</p>
												<span className="text-xs text-zinc-300 mt-1 block">
													{formatTime(message.createdAt)}
												</span>
											</div>
										</div>
									))}
								</div>
							</ScrollArea>

							<MessageInput />
						</>
					) : (
						<NoConversationPlaceholder />
					)}
				</div>
			</div>
		</main>
	);
};
export default ChatPage;

const NoConversationPlaceholder = () => (
	<div className='flex flex-col items-center justify-center h-full space-y-6'>
		<img src='/harmonic.png' alt='HarmonicX logo' className='size-16 animate-bounce' />
		<div className='text-center'>
			<h3 className='text-zinc-300 text-lg font-medium mb-1'>No conversation selected</h3>
			<p className='text-zinc-500 text-sm'>Choose a friend to start chatting</p>
		</div>
	</div>
);
