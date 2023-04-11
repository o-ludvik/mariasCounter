'use server'
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://mariascounter.fly.dev')

export default async function srv() {
    return await pb.collection('players').getFullList()
}